/*
* new 关键字会进行如下的操作：

创建一个空的简单JavaScript对象（即{}）；
链接该对象（即设置该对象的构造函数）到另一个对象 ；
将步骤1新创建的对象作为this的上下文 ；
如果该函数没有返回对象，则返回this。

new：
  1、新生成了一个对象
  2、新对象隐式原型链接到函数原型
  3、调用函数绑定this
  4、返回新对象
* */


function _new(fun) {
  return function() {
    let obj = {
      __proto__: fun.prototype
    }
    fun.apply(obj, arguments)
    return obj
  }
}

function _new(fn, ...arg) {
  const obj = {}; // 创建一个新的对象
  obj.__proto__ = fn.prototype; // 把obj的__proto__指向fn的prototype,实现继承
  fn.apply(obj, arg) // 改变this的指向
  return Object.prototype.toString.call(obj) == '[object Object]'? obj : {} //返回新的对象obj
}

function _new(fn) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj);
  return obj;
}

function _new(fn) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj);
  return Object.prototype.toString.call(obj) === 'object' ? obj : {};
}

Array.isArray = function(obj) {
  if (typeof Array.isArray !== 'function') {
    Array.isArray = function (value) {
      return Object.prototype.toString().apply(value) === '[object array]';
    };
  }
}
