const _ = require('lodash');

/***********************深拷贝实现*********************/
// 判断是否是对象
function isObject(obj) {
  return typeof obj === 'object' && obj != null;
}

function cloneDeep(source) {
  // 如果不是对象类型，则直接返回
  if (!isObject(source))
    return source;

  // 否是数组
  let target = Array.isArray(source) ? [] : {};
  // 遍历类型
  for(let key in source) {
    // 检测一个对象是否含有特定的自身属性，而忽略掉那些从原型链上继承到的属性。
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}


var obj1 = {
  a: 1,
  b: { f: { g: 1 } },
  c: [1, 2, 3]
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f);


function isObject(params) {
  return params != null && typeof params === 'object';
}

function cloneDeep(params) {
  if (isObject(params)) {
    return params;
  }

  let target = Array.isArray(params) ? [] : {};
  for(let key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      if (isObject(params[key])) {
        target[key] = params[key];
      } else {
        target[key] = cloneDeep(params[key]);
      }
    }
  }

  return target;
}
