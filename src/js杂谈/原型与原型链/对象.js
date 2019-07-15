/**
 * js 对象分为：普通对象、函数对象
 *
 * 凡是通过new Function() 创建的对象都是函数对象
 * */

// 函数对象
function f1() {}
const f2 = function() {}
const f3 = new Function('str', 'console.log(str)');
console.log(typeof f1); // function
console.log(typeof f2); // function
console.log(typeof f3); // function

console.log(typeof f3.prototype);

// 普通对象
const o1 = {};
const o2 = new Object();
const o3 = new f1();

console.log(typeof o1); // object
console.log(typeof o2); // object
console.log(typeof o3); // object

// 实例的构造函数属性（constructor）指向构造函数
// 函数对象都有一个prototype 属性，这个属性指向函数的原型对象
// 每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性
// 结论：原型对象（Person.prototype）是 构造函数（Person）的一个实例。
// 原型对象其实就是普通对象（但 Function.prototype 除外，它是函数对象，但它很特殊，他没有prototype属性（前面说道函数对象都有prototype属性））


const str = '1234567890';
console.log(str.substr(-1, 3))
