define(["require", "exports", "./Vue"], function (require, exports, Vue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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