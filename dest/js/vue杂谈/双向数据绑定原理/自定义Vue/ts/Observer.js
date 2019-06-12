"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dep_1 = require("./Dep");
var Observer = (function () {
    function Observer(obj) {
        this.observable(obj);
    }
    Observer.prototype.observable = function (_obj) {
        var _this = this;
        if (!_obj || typeof _obj !== 'object') {
            return;
        }
        var keys = Object.keys(_obj);
        keys.forEach(function (key) {
            _this.defineReactive(_obj, key, _obj["" + key]);
        });
        return _obj;
    };
    Observer.prototype.defineReactive = function (obj, key, val) {
        var dep = new Dep_1.default();
        Object.defineProperty(obj, key, {
            get: function reactiveGetter() {
                if (Dep_1.default.target) {
                    dep.depend();
                }
                console.log(key + " \u88AB\u4F9D\u8D56");
                return val;
            },
            set: function (_val) {
                console.log(key + " \u88AB\u4FEE\u6539");
                val = _val;
                dep.notify();
            }
        });
    };
    return Observer;
}());
exports.default = Observer;
//# sourceMappingURL=Observer.js.map