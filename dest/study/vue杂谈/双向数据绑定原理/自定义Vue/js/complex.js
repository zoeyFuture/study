var Vue = (function () {
    function Vue(options) {
        this.el = document.querySelector(options.el);
        this.data = options.data();
        this.methods = options.methods;
        this.start();
    }
    Vue.prototype.start = function () {
        this.observer = new Observer(this.data);
        this.compile = new Compile(this);
    };
    return Vue;
}());
var Compile = (function () {
    function Compile(_vm) {
        this.vm = _vm;
        this.compile(this.vm.el);
    }
    Compile.prototype.compile = function (el) {
        var _this = this;
        var nodes = el.children;
        var _loop_1 = function (i_1) {
            var node = nodes[i_1];
            if (node.children.length > 0) {
                this_1.compile(node);
            }
            if (node.hasAttribute('v-on:click')) {
                var attr = node.getAttribute('v-on:click');
                node.addEventListener('click', this_1.vm.methods[attr].bind(this_1.vm.data));
            }
            if (node.hasAttribute('v-if')) {
                var attr = node.getAttribute('v-if');
                new Watcher(this_1.vm, attr, function (_val) {
                    console.log('v-if:', _val);
                    _val === true ? node.style.display = 'block' : node.style.display = 'none';
                });
            }
            if (node.hasAttribute('v-model')) {
                var attr_1 = node.getAttribute('v-model');
                new Watcher(this_1.vm, attr_1, function (_val) {
                    console.log('_val:', _val);
                    node.value = _val;
                });
                node.addEventListener('input', function (e) {
                    _this.vm.data[attr_1] = e.target.value;
                    console.log('e.target.value:', e.target.value);
                });
            }
            if (node.hasAttribute('v-text')) {
                var attr = node.getAttribute('v-text');
                new Watcher(this_1.vm, attr, function (_val) {
                    console.log('innerText:', _val);
                    node.innerText = _val;
                });
            }
        };
        var this_1 = this;
        for (var i_1 = 0; i_1 < nodes.length; i_1 += 1) {
            _loop_1(i_1);
        }
    };
    return Compile;
}());
var Observer = (function () {
    function Observer(_obj) {
        this.observable(_obj);
    }
    Observer.prototype.observable = function (_obj) {
        var _this = this;
        if (!_obj || typeof _obj !== 'object') {
            return;
        }
        var keys = Object.keys(_obj);
        keys.forEach(function (key) {
            _this.defineReactive(_obj, key, _obj[key]);
        });
        return _obj;
    };
    Observer.prototype.defineReactive = function (obj, key, val) {
        var dep = new Dep();
        Object.defineProperty(obj, key, {
            get: function reactiveGetter() {
                if (Dep.target) {
                    dep.depend();
                }
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
            console.log('depend:');
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
        this.update();
    }
    Watcher.prototype.get = function () {
        Dep.target = this;
        var value = this.vm.data[this.attr];
        Dep.target = null;
        console.log('get:', this.attr);
        return value;
    };
    Watcher.prototype.update = function () {
        var oldVal = this.value;
        var value = this.vm.data[this.attr];
        console.log('update:', value, oldVal);
        {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    };
    return Watcher;
}());
//# sourceMappingURL=complex.js.map