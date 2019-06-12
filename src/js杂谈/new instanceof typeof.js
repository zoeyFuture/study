const Person = function(name) {
    this.name = name;
}

// 在 Person 方法原型上添加属性，则在实例中调用
Person.prototype.sayHello = function() {
    console.log('Hello ' + this.name);
}

// 实例化对象 
/***
 * 实例化过程，即 new 的实现：
 *  
 * new Person(params) {
 *    const obj = new Object();
 *    // 此时，obj的原型链为：obj -> People.prototype -> Object.prototype -> null
 *    obj.__proto__ = Person.prototype;
 *    Person.call(obj);
 * }
 * * */
const person = new Person('Tom');
// 调用 Person.prototype 上的方法
person.sayHello(); // Hello Tom


/***
 * js new的原理
 * * */
const New = function(Constructor, ...params) {
    console.log(params);
    // 实例化一个对象
    const obj = new Object();
    // 设置对象 __proto__执行构造函数的prototype
    obj.__proto__ = Constructor.prototype;
    // 调用并配置this执行
    Constructor.call(obj, ...params);
    // 返回一个对象
    return obj;
}

console.log('new 的实现：');
const newPerson = New(Person, 'Joke');
newPerson.sayHello();

/***
 * instanceof 是检测对象是否是某个函数的实例
 * 原理是检测对象 __proto__ 是否指向 Person.prototype
 * * */
console.log(newPerson instanceof Person); // true
console.log(newPerson.__proto__ === Person.prototype); // true


/**
 * typeof 获取变量类型
 * * */

// const isArray = function(params) {
//     return typeof params === '[object array]';
// }

/**
 * 
 * Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
 * * */

const array = [1, 2, 3];
console.log(Object.prototype.toString.call(array));
console.log(Array.isArray(array));

// Array.isArray = function(arg) {
//     return Object.prototype.toString.call(arg) = '[object Array]';
// }