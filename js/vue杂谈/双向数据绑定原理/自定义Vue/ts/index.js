(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Vue"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vue_1 = require("./Vue");
    console.log('Vue:', Vue_1.default);
    new Vue_1.default({
        el: '#app',
        data: function () {
            return {
                title: 'Vue Demo示例1',
                isShow: true,
                webSite: 'http://www.baidu.com',
            };
        },
        methods: {
            clear: function () {
                console.log('clear');
                this.title = 'Vue Demo示例2';
            },
            show: function () {
                console.log('show');
                this.isShow = !this.isShow;
            }
        },
        created: function () {
            console.log(this.data);
        }
    });
});
//# sourceMappingURL=index.js.map