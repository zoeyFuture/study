var _dec, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

// https://juejin.cn/post/6844903426980053006
// 构建 npx babel index.js --out-file babel-index.js
// 简单AOP实现

/**
 * 装饰器模式的简单实现：es6+ 之前，通常通过
 * Function.prototype.before 做前置装饰，
 * Function.prototype.after 做后置装饰
 * **/
Function.prototype.before = function (action) {
  var func = this;
  return function () {
    action.apply(this, arguments);
    return func.apply(this, arguments);
  };
};

Function.prototype.after = function (action) {
  var func = this;
  return function () {
    const result = func.apply(this, arguments);
    action.apply(this, arguments);
    return result;
  };
};

var foo = function () {
  console.log(2);
};

foo = foo.before(function () {
  console.log(1);
}).after(function () {
  console.log(3);
}); // foo()

/**
 * es7 中引入装饰器（Decorator）概念，提供了对
 * JavaScript 的类和类里面的方法就行装饰的能力
 * **/

function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list);
  };
}

function log(target, name, descriptor
/* 描述符 */
) {
  // 保存原来的值
  const value = descriptor.value; // 添加钩子

  descriptor.value = function () {
    console.log('before'); // 调用原来的值

    value();
    console.log('after');
  };

  return descriptor;
}

function connect(beforeFn, afterFn) {
  return function (target, name, descriptor) {
    console.log('target:', target);
    console.log('name:', name);
    console.log('descriptor:', descriptor); // 保存原有的值

    const value = descriptor.value;

    descriptor.value = () => {
      beforeFn && beforeFn();
      value();
      afterFn && afterFn();
    };

    return descriptor;
  };
}

let LogComponent = (_dec = connect(() => {
  console.log('before:', 1);
}, () => {
  console.log('after:', 3);
}), (_class = class LogComponent {
  log() {
    console.log(2);
  }

}, (_applyDecoratedDescriptor(_class.prototype, "log", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "log"), _class.prototype)), _class));
const logComponent = new LogComponent();
logComponent.log();
