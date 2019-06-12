(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dep = /** @class */ (function () {
        function Dep() {
            this.id = 10;
            this.subs = [];
        }
        // 添加订阅者对象
        Dep.prototype.addSub = function (sub) {
            this.subs.push(sub);
        };
        // 删除订阅者对象
        Dep.prototype.removeSub = function (sub) {
        };
        Dep.prototype.depend = function () {
            if (Dep.target) {
                this.addSub(Dep.target);
            }
        };
        Dep.prototype.notify = function () {
            var subs = this.subs.slice();
            for (var i = 0, l = subs.length; i < l; i++) {
                // 更新 Watcher
                subs[i].update();
            }
        };
        return Dep;
    }());
    exports.default = Dep;
    Dep.target = null;
});
//# sourceMappingURL=Dep.js.map