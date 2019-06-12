/**
 * 创建依赖收集器，也就是消息订阅器，保存所有的订阅者
 *
 * 创建消息订阅器Dep
 * */
class Dep {
  constructor() {
    // 保存所有的订阅者
    this.subs = [];
  }

  // 添加订阅者
  addSub(sub) {
    // 检测是否又重复
    this.subs.push(sub);
  }

  // 通知订阅者进行更新
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }

  // 判断是否增加订阅者
  depend() {
    if(Dep.target) {
      this.addSub(Dep.target);
    }
  }
}

Dep.target = null;

/**
 * 创建订阅者 Watcher
 */
class Watcher {
  constructor(vm, attr, cb){
    this.vm = vm;
    this.attr = attr;
    this.cb = cb;

    this.value = this.get();  // 将自己添加到订阅器的操作
  }

  get(){
    Dep.target = this;  // 缓存自己
    let value = this.vm.data[this.attr]  // 强制执行监听器里的get函数
    Dep.target = null;  // 释放自己
    return value;
  }

  update() {
    let value = this.vm.data[this.attr];
    let oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  }
}

/********************** 将一个对象的数据变成"可观测的" **************************/
/**
 * 配置对象的属性为可观测属性
 * */
function defineReactive(obj, key, val) {
  let dep = new Dep();
  Object.defineProperty(obj, key, {
    get() {
      dep.depend();
      console.log(`${key}属性被读取了`);
      return val;
    },
    set(newVal) {
      val = newVal;
      console.log(`${key}属性被修改了`);
      dep.notify() // 数据发生变化，通知所有订阅者
    }
  });
}

/**
 * 把一个对象的每一项都转转为一个可观测对象
 * */
function observable(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }

  let keys = Object.keys(obj);
  keys.forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
  return obj;
}

let car = observable({
  brand: 'BMW',
  price: 3000,
});

car.brand = "1111";

/**
 * 当对象属性变成可观测之后，我们就能检测到对象属性的变化，
 * 那么，我们就可以在数据被读或写的时候，通知那些依赖该数据的试图进行更新，那就需要我们收集所有依赖，一旦数据发生变化，统一进行更，即发布订阅者模式的使用
 * */


/***
 * 解析模板指令
 * Compile
 * */

class Compile {

}
