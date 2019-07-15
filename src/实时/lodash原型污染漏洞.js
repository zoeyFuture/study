const _ = require('lodash');

/** 原型污染 */
const person = {
  name: '张三',
};

function isArray(params) {
  console.log('isArray func:', Object.prototype.toString.call(params));
  return Object.prototype.toString.call(params) === '[object Array]';
}

const array = [1, 2, 3, 4];
console.log('Array:', isArray(array));

// 修改 person 的原型
person.__proto__.name = '李四';
// 严重漏洞
person.__proto__.toString = () => 'toString error';
console.log('Array:', isArray(array)); // 结果：错误

// 由于原型链顺序查找的原因，person.name 仍然是 李四
console.log(person.name);


const newPerson = {};
console.log(newPerson.name);

/********************************************************************/
// "原型漏洞" 攻击
Object.prototype.toString = 'name';
console.log(Object.prototype.toString);

// 解决方法：Object.freeze - 冻结对象原型，不可修改
Object.prototype = Object.freeze(Object.prototype);
Object.prototype.toString = 'name1';
console.log(Object.prototype.toString);
