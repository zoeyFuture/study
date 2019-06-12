class People {
  constructor(_name, _time) {
    this.name = _name;
    this.time = _time;
  }

  wakeUp() {
    console.log(`${this.name} ${this.time} 睡醒了`);
  }
}

class Chinese extends People {
  constructor(_name, _time) {
    super(_name, _time);
  }

  wakeUp(){
    console.log(`啦啦啦 ${this.name} ${this.time} 睡醒了`);
  }
}

class American extends People {
  constructor(_name, _time) {
    super(_name, _time);
  }

  wakeUp(){
    console.log(`啦啦啦 ${this.name} ${this.time} 睡醒了`);
  }
}

const peoples = [
  new Chinese("张三", 8),
  new American("Tom", 20),
];
