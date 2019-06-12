define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dep = (function () {
        function Dep() {
            this.id = 10;
            this.subs = [];
        }
        Dep.prototype.addSub = function (sub) {
            this.subs.push(sub);
        };
        Dep.prototype.removeSub = function (sub) {
        };
        Dep.prototype.depend = function () {
            if (Dep.target) {
                this.addSub(Dep.target);
            }
        };
        Dep.prototype.notify = function () {
            var subs = this.subs.slice();
            for (var i_1 = 0, l = subs.length; i_1 < l; i_1++) {
                subs[i_1].update();
            }
        };
        return Dep;
    }());
    exports.default = Dep;
    Dep.target = null;
});
//# sourceMappingURL=Dep.js.map