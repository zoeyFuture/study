define(["require", "exports", "./Dep"], function (require, exports, Dep_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Watcher = (function () {
        function Watcher(vm, attr, cb) {
            this.vm = vm;
            this.attr = attr;
            this.cb = cb;
            this.value = this.get();
            this.update();
        }
        Watcher.prototype.get = function () {
            Dep_1.default.target = this;
            var value = this.vm.data["" + this.attr];
            Dep_1.default.target = null;
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
});
//# sourceMappingURL=Watcher.js.map