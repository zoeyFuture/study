var Vue = (function () {
    function Vue(options) {
        this.el = document.querySelector(options.el);
        this.data = options.data();
        this.methods = options.methods;
        this.created = options.created;
        this.oWatcherObj = {};
    }
    Vue.prototype.start = function () {
        this.observe();
        this.created.call(this);
        this.compile(this.el);
    };
    Vue.prototype.observe = function () {
        var _loop_1 = function (key) {
            var value = this_1.data[key];
            this_1.oWatcherObj[key] = [];
            var oWatcherObj = this_1.oWatcherObj[key];
            Object.defineProperty(this_1.data, key, {
                configurable: false,
                enumerable: false,
                get: function () {
                    return value;
                },
                set: function (_val) {
                    if (_val !== value) {
                        value = _val;
                        oWatcherObj.forEach(function (obj) {
                            obj.update();
                        });
                    }
                }
            });
        };
        var this_1 = this;
        for (var key in this.data) {
            _loop_1(key);
        }
    };
    Vue.prototype.compile = function (el) {
        var _this = this;
        var nodes = el.children;
        var _loop_2 = function (i_1) {
            var node = nodes[i_1];
            if (node.children.length > 0) {
                this_2.compile(node);
            }
            if (node.hasAttribute('v-on:click')) {
                var attr = node.getAttribute('v-on:click');
                var callback_1 = this_2.methods[attr];
                if (typeof callback_1 === 'function') {
                    node.addEventListener('click', callback_1.bind(this_2.data));
                }
            }
            if (node.hasAttribute('v-if')) {
                var attr = node.getAttribute('v-if');
                var watcher = new Watcher(this_2, node, "", attr);
                this_2.oWatcherObj[attr].push(watcher);
            }
            if (node.hasAttribute('v-model')) {
                var modelAttrVal_1 = node.getAttribute('v-model');
                node.addEventListener('input', (function (i) {
                    _this.oWatcherObj[modelAttrVal_1].push(new Watcher(_this, node, "value", modelAttrVal_1));
                    return function () {
                        _this.data[modelAttrVal_1] = nodes[i].value;
                    };
                })(i_1));
            }
            if (node.hasAttribute('v-text')) {
                var textAttrVal = node.getAttribute('v-text');
                this_2.oWatcherObj[textAttrVal].push(new Watcher(this_2, node, "innerText", textAttrVal));
            }
        };
        var this_2 = this;
        for (var i_1 = 0; i_1 < nodes.length; i_1 += 1) {
            _loop_2(i_1);
        }
    };
    return Vue;
}());
var Watcher = (function () {
    function Watcher(vm, el, attr, val) {
        this.vm = vm;
        this.el = el;
        this.attr = attr;
        this.val = val;
        this.update();
    }
    Watcher.prototype.update = function () {
        var value = this.vm.data[this.val];
        if (typeof value === 'boolean') {
            if (value === true) {
                this.el.style.display = 'block';
            }
            else if (value === false) {
                this.el.style.display = 'none';
            }
        }
        else {
            this.el[this.attr] = value;
        }
    };
    return Watcher;
}());
//# sourceMappingURL=simple.js.map