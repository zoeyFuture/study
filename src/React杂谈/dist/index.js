'use strict';

var _dec, _class, _dec2, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function connect(props) {
  var keys = Object.keys(props);

  console.log('props:', props);
  var params = {};
  keys.forEach(function (key) {
    params[key] = props[key];
  });
  console.log('params:', params);

  return function (target) {
    keys.forEach(function (key) {
      target[key] = props[key];
    });
  };
}

//注意这里，隐形传入了Class，语法类似于testable(true)(MyTestableClass)
var MyTestableClass = (_dec = connect({ key: 1, fname: '张三', isTestable: true }), _dec(_class = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
}) || _class);

console.log(MyTestableClass.isTestable); // true

var MyClass = (_dec2 = connect({ key: 1, fname: '张三', isTestable: true }), _dec2(_class2 = function MyClass() {
  _classCallCheck(this, MyClass);
}) || _class2);

console.log(MyClass.key, MyClass.fname); // false
