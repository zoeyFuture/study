/**
 * Reflect 对象设计的目的：
 * 1、将Object对象一些明显属于语言内部的方法（Object.defineProperty）,放到Reflect对象上。
 *    现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只在Reflect对象上部署。
 *
 * 2、修改某些Object方法的返回结果，让其更合理
 *  例如：当使用Object.defineProperty(obj, name, desc)在无法定义属性时，会跑出一个错误，
 *  而Reflect 。defineProperty(obj, name, desc)则会返回false
 *
 * ....
 * */

const obj = {
  name: '张三',
  age: 28,
};

/**
 * 这里对每个Proxy对象的拦截操作，内部都调用对应的Reflect方法，保证原生行为能够正常执行
 * */
const  loggedObj = new Proxy(obj, {
  get: (target, name) => {
    console.log('get', target, name);
    // return target[name];
    return Reflect.get(target, name);
  },
  deleteProperty: (target, name) => {
    console.log('delete:' + name);
    // delete target[name];
    return Reflect.defineProperty(target, name);
  },

  has: (target, name) => {
    console.log('has:' + name);
    // return name in target;
    return Reflect.has(target, name);
  },
});

// Array.isArray = function() {
//   return Object.prototype.toString().apply(value) === '[object array]';
// };

console.log('name:', Reflect.get(obj, 'name'));
