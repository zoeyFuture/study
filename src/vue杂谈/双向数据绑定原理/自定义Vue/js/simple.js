/**
 * 实现一个简单Vue的步骤：
 *
 * */
class Vue {
  constructor(options) {
    this.el = document.querySelector(options.el);
    this.data = options.data();
    this.methods = options.methods;

    this.oWatcherObj = {}; // 所有属性值相关的数据对应的订阅器的集合都放在该对象中

    this.start();
  }

  start () {
    this.observe(); // 数据监听
    this.created.call(this);
    this.compile(this.el); // DOM节点解析
  }

  /**
   * 数据监听器
   *    用来劫持并监听 data 属性值相关数据的变化，当数据发生变化时，通知订阅器 watcher
   * */
  observe() {
    for (let key in this.data) {
      let value = this.data[key];
      this.oWatcherObj[key] = []; // 初始化该数据的订阅器 数据和订阅器的关系是一对多

      // 依赖属性的视图
      let oWatcherObj = this.oWatcherObj[key];

      Object.defineProperty(this.data, key, {
        configurable: false, // 该状态下的属性描述符不能被修改和删除
        enumerable: false, // 该状态下的属性描述符中的属性不可被枚举
        get() { // 属性值相关的数据读取函数
          return value;
        },
        set(_val) { // 属性值相关的数据写入函数
          if (_val !== value) {
            value = _val;
            oWatcherObj.forEach((obj) => {
              obj.update(); // 通知和该数据相关的所有订阅器
            });
          }
        }
      });
    }
  }
  /**
   * 解析器：
   *
   * */
  compile(el) { // 节点DOM解析器 用来获取和解析每一个节点及其指令 根据初始化的模板数据来创建订阅器watcher
    let nodes = el.children;
    for (let i = 0; i < nodes.length; i += 1) { // 迭代同级所有节点
      let node = nodes[i];
      if (node.children.length > 0) {
        this.compile(node); // 递归所有子节点
      }

      // 解析 yf-on:click 指令 - 对应 methods 方法
      if (node.hasAttribute('v-on:click')) { // 节点中如存在该指令则执行以下操作
        const attr = node.getAttribute('v-on:click');
        const callback = this.methods[attr];
        if (typeof callback === 'function'){
          node.addEventListener('click', callback.bind(this.data)); // 绑定获取到的指令对应的数据所触发的方法
        }
      }

      // 解析 yf-if 指令
      if (node.hasAttribute('v-if')) {
        const attr = node.getAttribute('v-if');
        // 监听数据变化
        const watcher = new Watcher(this, node, "", attr);
        this.oWatcherObj[attr].push(watcher); // 给该指令对应的数据创建订阅器放在该数据对应的订阅器数组里
      }

      // 解析 yf-model 指令
      if (node.hasAttribute('v-model')) {
        let modelAttrVal = node.getAttribute('v-model');
        node.addEventListener('input', ((i) => { // 前方高能:此处有闭包请绕行!!! i的问题
          this.oWatcherObj[modelAttrVal].push(new Watcher(this, node, "value", modelAttrVal));
          return () => {
            this.data[modelAttrVal] = nodes[i].value; // 将该指令所在节点的值扔给该指令的数据
          }
        })(i));
      }

      // 解析 yf-text 指令
      if (node.hasAttribute('v-text')) {
        let textAttrVal = node.getAttribute('v-text');
        this.oWatcherObj[textAttrVal].push(new Watcher(this, node, "innerText", textAttrVal));
      }
    }
  }
}

/**
 * 订阅器：
 *  接收属性址的相关数据的变化通知，并更新视图
 * */
class Watcher { // 订阅器构造 用来接收属性值的相关数据的变化通知 从而更新视图
  constructor(vm, el, attr, val) {
    this.vm = vm;
    this.el = el;
    this.attr = attr;
    this.val = val;

    // 初始化
    this.update();
  }
  update() { // 将收到的新的数据更新在视图中从而实现真正的VM
    const value = this.vm.data[this.val];

    if (typeof value === 'boolean') {
      if (value === true) {
        this.el.style.display = 'block';
      } else if (value === false) {
        this.el.style.display = 'none';
      }
    } else {
      this.el[this.attr] = value;
    }
  }
}
