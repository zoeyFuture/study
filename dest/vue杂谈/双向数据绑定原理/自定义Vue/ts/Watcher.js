"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dep_1 = require("./Dep");
/**
 * 创建订阅者 Watcher
 */
var Watcher = /** @class */ (function () {
    function Watcher(vm, attr, cb) {
        this.vm = vm;
        this.attr = attr;
        this.cb = cb;
        this.value = this.get();
        this.update();
    }
    /**
     * 缓存自身，标记为依赖属性的依赖者
     * */
    Watcher.prototype.get = function () {
        Dep_1.default.target = this; // 缓存自己
        var value = this.vm.data["" + this.attr];
        Dep_1.default.target = null; // 释放自己
        console.log('get:', this.attr);
        return value;
    };
    Watcher.prototype.update = function () {
        var oldVal = this.value;
        var value = this.vm.data[this.attr];
        this.value = value;
        this.cb.call(this.vm, value, oldVal);
    };
    return Watcher;
}());
exports.default = Watcher;
//# sourceMappingURL=Watcher.js.map