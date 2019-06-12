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
        for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    };
    return Dep;
}());
exports.default = Dep;
Dep.target = null;
//# sourceMappingURL=Dep.js.map