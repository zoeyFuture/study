// 观察者
class Observer {
  constructor(_name) {
    this.name = _name;
  }
  update(...args) {
    console.log(`${this.name} - 收到消息：${args}`);
  }
}

// 观察者列表
class ObserverList {
  constructor() {
    this.observerList = [];
  }

  add(observer) {
    return this.observerList.push(observer);
  }

  remove(observer) {
    this.observerList = this.observerList.filter(d => d !== observer);
  }

  count() {
    return this.observerList.length;
  }

  get(index) {
    return this.observerList[index];
  }
}

// 被观察的目标对象
class Subject {
  constructor() {
    this.observerList = new ObserverList();
  }

  addObserver(observer) {
    this.observerList.add(observer);
  }

  removeObserver(observer) {
    this.observerList.remove(observer);
  }

  notify(...args) {
    const observerCounts = this.observerList.count();
    for(let i=0; i<observerCounts; i++) {
      this.observerList.get(i).update(...args);
    }
  }
}

const aObserver = new Observer('A');
const bObserver = new Observer('B');
const target = new Subject();
target.addObserver(aObserver);
target.addObserver(bObserver);

target.notify('新小区发售了')
