var _dec, _dec2, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

// 日志上报
// 前置装饰器：可以切入任意的非业务代码
function before(beforeFn = function () {}) {
  return function (target, name, descriptor) {
    const value = descriptor.value;

    descriptor.value = function () {
      // console.log('before descriptor:', this.id, this.page)
      beforeFn.apply(this, arguments);
      return value.apply(this, arguments);
    };

    return descriptor;
  };
} // 后置装饰器


function after(afterFn = function () {}) {
  return function (target, name, descriptor) {
    const value = descriptor.value;

    descriptor.value = function () {
      // console.log('after descriptor:', this.id, this.page)
      value.apply(this, arguments);
      afterFn.apply(this, arguments);
    };

    return descriptor;
  };
}

const logReport = (target, name, descriptor) => {
  const value = descriptor.value;

  descriptor.value = function () {
    console.log('logReport:', this.id, this.page);
    return value.apply(arguments);
  };

  return descriptor;
};

let Dialog = (_dec = before(function () {
  console.log('before:', 1, this.visible);
}), _dec2 = after(function () {
  console.log('after:', 1, this.visible);
}), (_class = class Dialog {
  constructor() {
    this.id = 123450;
    this.page = '/dialog';
    this.visible = false;
  }

  open() {
    this.visible = true;
    console.log('Dialog open:', 2);
  }

  close() {
    this.visible = false;
    console.log('Dialog close');
  }

}, (_applyDecoratedDescriptor(_class.prototype, "open", [_dec, logReport, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, "open"), _class.prototype)), _class)); // 模拟按钮点击事件

new Dialog().open();
