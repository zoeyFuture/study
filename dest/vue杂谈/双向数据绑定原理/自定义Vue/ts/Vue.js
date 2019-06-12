"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observer_1 = require("./Observer");
var Compile_1 = require("./Compile");
var Vue = /** @class */ (function () {
    function Vue(options) {
        this.el = document.querySelector(options.el);
        this.data = options.data();
        this.methods = options.methods;
        this.start();
    }
    /**
     * 开启上香数据绑定之旅
     *  1、设置data为可观测对象，进行数据监听
     *  2、编译解析指令：v-on:click、v-model、v-text、v-if
     * */
    Vue.prototype.start = function () {
        var observer = new Observer_1.default(this.data);
        var compile = new Compile_1.default(this);
    };
    return Vue;
}());
exports.default = Vue;
//# sourceMappingURL=Vue.js.map