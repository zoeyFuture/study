"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dep_1 = require("./Dep");
/***
 * 观测者
 * @desc 将对象转变为可观测对象，对所有对象属性添加订阅者数组
 * */
var Observer = /** @class */ (function () {
    function Observer(obj) {
        this.observable(obj);
    }
    /**
     * 将对象的每个属性都转换为可观测对象
     * */
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
    /**
     * 转换对象属性为可观测，并添加订阅者信息
     * */
    Observer.prototype.defineReactive = function (obj, key, val) {
        var dep = new Dep_1.default();
        Object.defineProperty(obj, key, {
            get: function reactiveGetter() {
                // 检测是否处于依赖收集状态
                if (Dep_1.default.target) {
                    // 建立依赖关系
                    dep.depend();
                }
                console.log(key + " \u88AB\u4F9D\u8D56");
                return val;
            },
            set: function (_val) {
                console.log(key + " \u88AB\u4FEE\u6539");
                val = _val;
                // 属性发生变化，通知所有订阅者
                dep.notify();
            }
        });
    };
    return Observer;
}());
exports.default = Observer;
//# sourceMappingURL=Observer.js.map