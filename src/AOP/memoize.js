// 备用录模式
// npx babel memoize.js --out-file memoize.babel.js
// https://www.cnblogs.com/mengff/p/9661648.html

let memoized = new WeakMap();

function computed(target, name, descriptor) {
  const getter = descriptor.get
  const setter = descriptor.set

  descriptor.get = function() {
    let table = memoizationFor(this)

    if (name in table) {
      return table[name]
    }

    // 缓存并返回
    return table[name] = getter.call(this)
  }

  descriptor.set = function(val) {
    let table = memoizationFor(this);
    setter.call(this, val);
    table[name] = val;
  }
}

function memoizationFor(obj) {
  let table = memoized.get(obj);
  if (!table) {
    table = Object.create(null);
    memoized.set(obj, table);
  }
  return table;
}

class Person {
  constructor(name) {
    this.name = name
  }

  @computed
  get name() { 
    console.log('call name getter')
    return `${this.first} ${this.last}`
  }
  set name(val) {
    console.log('call name setter')
    let [first, last] = val.split(' ');
    this.first = first;
    this.last = last;
  }
}

const person = new Person('张 三')
console.log('person:', person.name)
console.log('person:', person.name)

person.name = '李 四'

console.log('person:', person.name)
console.log('person:', person.name)