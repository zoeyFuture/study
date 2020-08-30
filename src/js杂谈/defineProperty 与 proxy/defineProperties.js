// Object.defineProperty
let obj = {};
let name = '张三';

/**
 * Object.defineProperty 在一个对象上定义新属性，或者修改现有属性，并返回这个对象
 * */
Object.defineProperty(obj, "name",{
  // 属性描述符
  configurable: true,
  enumerable: true,

  // 存取描述符
  get: function(){
    console.log('获取 name');
    return name;
  },
  set: function(_val) {
    console.log('设置 name');
    name = _val;
  },
});

obj.name = '李四';
console.log(obj.name);

// Object.defineProperties
/**
 * 在一个对象上定义一个或多个新属性或修改现有属性，并返回该对象
 * */

Object.defineProperties(obj, {
  age: {
    value: 29,
    configurable: true,
    enumerable: true,
  },
  before: {
    value: function() {
      console.log('before');
    },
    writable: true,
  },
  after: {
    value: function() {
      console.log('after');
    }
  },
});

obj.before();
console.log(obj.age);
obj.after();


function delegateProperty(from, to, propName) {
  Object.defineProperty(from, propName, {
    set: (val) => {
      to[propName] = val;
    },
    get: () => to[propName]
  })
}

let deprecetedDefaultExport = {}
let container = {}

// 监听并同步属性
delegateProperty(deprecetedDefaultExport, container, 'a');
// delegateProperty(deprecetedDefaultExport, container, 'maxScrollSpeed');
// delegateProperty(deprecetedDefaultExport, container, 'wrapChild');
// delegateProperty(deprecetedDefaultExport, container, 'dropHandler');

console.log('deprecetedDefaultExport:', deprecetedDefaultExport, container)
deprecetedDefaultExport.a = 1

console.log('deprecetedDefaultExport:', deprecetedDefaultExport, container)
deprecetedDefaultExport.a = 2

console.log('deprecetedDefaultExport:', deprecetedDefaultExport, container)
