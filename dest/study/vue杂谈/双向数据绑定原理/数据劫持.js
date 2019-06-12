var Dep = (function () {
    function Dep() {
        this.subs = [];
    }
    Dep.prototype.addSub = function (sub) {
        this.subs.push(sub);
    };
    Dep.prototype.notify = function () {
        this.subs.forEach(function (sub) {
            sub.update();
        });
    };
    Dep.prototype.depend = function () {
        if (Dep.target) {
            this.addSub(Dep.target);
        }
    };
    return Dep;
}());
Dep.target = null;
var Watcher = (function () {
    function Watcher(vm, attr, cb) {
        this.vm = vm;
        this.attr = attr;
        this.cb = cb;
        this.value = this.get();
    }
    Watcher.prototype.get = function () {
        Dep.target = this;
        var value = this.vm.data[this.attr];
        Dep.target = null;
        return value;
    };
    Watcher.prototype.update = function () {
        var value = this.vm.data[this.attr];
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    };
    return Watcher;
}());
function defineReactive(obj, key, val) {
    var dep = new Dep();
    Object.defineProperty(obj, key, {
        get: function () {
            dep.depend();
            console.log(key + "\u5C5E\u6027\u88AB\u8BFB\u53D6\u4E86");
            return val;
        },
        set: function (newVal) {
            val = newVal;
            console.log(key + "\u5C5E\u6027\u88AB\u4FEE\u6539\u4E86");
            dep.notify();
        }
    });
}
function observable(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    var keys = Object.keys(obj);
    keys.forEach(function (key) {
        defineReactive(obj, key, obj[key]);
    });
    return obj;
}
var car = observable({
    brand: 'BMW',
    price: 3000,
});
car.brand = "1111";
var Compile = (function () {
    function Compile() {
    }
    return Compile;
}());
//# sourceMappingURL=数据劫持.js.map