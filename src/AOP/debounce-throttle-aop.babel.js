var _dec, _dec2, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

// AOP 实现防抖与节流
function debounce(interval = 200) {
  return function (target, name, descriptor) {
    const value = descriptor.value;
    let timeout;

    descriptor.value = function () {
      if (timeout !== null) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        value.apply(this, arguments);
      }, interval);
    };

    return descriptor;
  };
}

function throttle(delay = 200) {
  return function (target, name, descriptor) {
    const value = descriptor.value;
    let prev = Date.now();

    descriptor.value = function () {
      const next = Date.now();

      if (next - prev >= delay) {
        value.apply(this, arguments);
        prev = Date.now();
      }
    };

    return descriptor;
  };
}

let Dialog = (_dec = debounce(), _dec2 = throttle(2000), (_class = class Dialog {
  input(params) {
    console.log('input: ', Date.now(), params);
  }

  scroll(params) {
    console.log('scroll: ', Date.now(), params);
  }

  start() {
    for (let i = 0; i < 1000_0000; i++) {
      this.input(i.toString().padStart(7, '0'));
      this.scroll(i.toString().padStart(7, '0'));
    }
  }

}, (_applyDecoratedDescriptor(_class.prototype, "input", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "input"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "scroll", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "scroll"), _class.prototype)), _class));
new Dialog().start();
