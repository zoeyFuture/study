/**
 * 事件调度中心
 * */
class DispatchCenter {
  constructor() {
    this.subscribers = [];
  }

  /**
   * 注册订阅者，返回 取消注册订阅方法
   * */
  addSubscriber(subscriber) {
    const isExist = this.subscribers.some(d => d === subscriber);
    if (!isExist) {
      this.subscribers.push(subscriber);
    }

    return () => {
      this.subscribers = this.subscribers.filter(d => d != subscriber);
    }
  }

  /**
   * 发布消息
   * */
  deliver(message) {
    this.subscribers.forEach(fn => fn(message));

  }
}

const dispatchCenter = new DispatchCenter();

// 订阅者
const a = function(message) {
  console.log(`订阅者A收到订阅信息：${message}`)
}
const b = function(message) {
  console.log(`订阅者B收到订阅信息：${message}`)
}

const unRegisterA = dispatchCenter.addSubscriber(a);
const unRegisterB = dispatchCenter.addSubscriber(b);

dispatchCenter.deliver('新园区A发布');
unRegisterA();
unRegisterB();

dispatchCenter.deliver('新园区B发布');


// 发布者
class Publish {

}


