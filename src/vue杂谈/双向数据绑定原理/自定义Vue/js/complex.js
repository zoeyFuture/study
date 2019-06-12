/**
 * 双向数据绑定
 *
 * @desc：实现一个自定义 MVVM 框架
 * */
class Vue {
  constructor(options) {
    this.el = document.querySelector(options.el);
    this.data = options.data();
    this.methods = options.methods;

    this.start();
  }

  /**
   * 开启上香数据绑定之旅
   *  1、设置data为可观测对象，进行数据监听
   *  2、编译解析指令：v-on:click、v-model、v-text、v-if
   *
   * */
  start () {
    this.observer = new Observer(this.data);
    this.compile = new Compile(this);
  }
}

/**
 * 实现解析器
 * @desc 结点解析器，用来获取和解析每个结点和指令，根据初始化的模板数据创建订阅器 watcher
 * @param {dom} el 待解析的结点
 * @returns null
 */
class Compile {
  constructor(_vm) {
    this.vm = _vm;
    this.compile(this.vm.el);
  }

  compile(el) {
    let nodes = el.children;
    for (let i = 0; i < nodes.length; i += 1) {
      let node = nodes[i];
      if (node.children.length > 0) {
        this.compile(node);
      }

      // 解析 v-on:click 指令
      if (node.hasAttribute('v-on:click')) {
        const attr = node.getAttribute('v-on:click');

        // 监听原生事件
        node.addEventListener('click', this.vm.methods[attr].bind(this.vm.data));
      }

      // 解析 v-if 指令
      if (node.hasAttribute('v-if')) {
        const attr = node.getAttribute('v-if');
        new Watcher(this.vm, attr, (_val) => {
          console.log('v-if:', _val);
          _val === true ? node.style.display = 'block' : node.style.display = 'none';
        });
      }

      // 解析 v-model 指令
      if (node.hasAttribute('v-model')) {
        const attr = node.getAttribute('v-model');
        new Watcher(this.vm, attr, (_val) => {
          console.log('_val:', _val);
          node.value = _val;
        });

        // 监听原生事件
        node.addEventListener('input', (e) => {
          this.vm.data[attr] = e.target.value;
          console.log('e.target.value:', e.target.value);
        });
      }

      // 解析 v-text 指令
      if (node.hasAttribute('v-text')) {
        let attr = node.getAttribute('v-text');
        new Watcher(this.vm, attr, (_val) => {
          console.log('innerText:', _val);
          node.innerText = _val;
        });
      }
    }
  }
}

/***
 * 观测者
 * @desc 将对象转变为可观测对象，对所有对象属性添加订阅者数组
 * */
class Observer {
  constructor (_obj) {
    this.observable(_obj);
  }

  /**
   * 将对象的每个属性都转换为可观测对象
   * */
  observable(_obj) {
    if (!_obj || typeof _obj !== 'object') {
      return;
    }

    let keys = Object.keys(_obj);
    keys.forEach((key) => {
      this.defineReactive(_obj, key, _obj[key]);
    });
    return _obj;
  }

  /**
   * 转换对象属性为可观测，并添加订阅者信息
   * */
  defineReactive(obj, key, val) {
    let dep = new Dep();
    Object.defineProperty(obj, key, {
      get: function reactiveGetter() {
        // 检测是否处于依赖收集状态
        if (Dep.target) {
          // 建立依赖关系
          dep.depend();
        }
        // console.log(`${key} 被依赖`);
        return val;
      },
      set(_val) {
        console.log(`${key} 被修改`);
        val = _val;

        // 属性发生变化，通知所有订阅者
        dep.notify();
      }
    });
  }
}

/**
 * 消息订阅器
 * @desc 创建依赖收集器，也就是消息订阅器，保存所有的订阅者
 *
 * */
class Dep {
  constructor() {
    // 保存所有的订阅者
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }

  // 判断是否增加订阅者
  depend() {
    if(Dep.target) {
      console.log('depend:',);
      this.addSub(Dep.target);
    }
  }
}

// 订阅者目标
Dep.target = null;


/**
 * 创建订阅者 Watcher
 */
class Watcher {
  constructor(vm, attr, cb){
    this.vm = vm;
    this.attr = attr;
    this.cb = cb;

    this.value = this.get();

    this.update();
  }

  /**
   * 缓存自身，标记为依赖属性的依赖者
   * */
  get() {
    Dep.target = this;  // 缓存自己
    let value = this.vm.data[this.attr];
    Dep.target = null;  // 释放自己
    console.log('get:', this.attr);
    return value;
  }

  update() {
    let oldVal = this.value;
    let value = this.vm.data[this.attr];
    console.log('update:', value, oldVal);
    // if (value !== oldVal)
    {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  }
}

