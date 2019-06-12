var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = (function () {
    function People(_name, _time) {
        this.name = _name;
        this.time = _time;
    }
    People.prototype.wakeUp = function () {
        console.log(this.name + " " + this.time + " \u7761\u9192\u4E86");
    };
    return People;
}());
var Chinese = (function (_super) {
    __extends(Chinese, _super);
    function Chinese(_name, _time) {
        return _super.call(this, _name, _time) || this;
    }
    Chinese.prototype.wakeUp = function () {
        console.log("\u5566\u5566\u5566 " + this.name + " " + this.time + " \u7761\u9192\u4E86");
    };
    return Chinese;
}(People));
var American = (function (_super) {
    __extends(American, _super);
    function American(_name, _time) {
        return _super.call(this, _name, _time) || this;
    }
    American.prototype.wakeUp = function () {
        console.log("\u5566\u5566\u5566 " + this.name + " " + this.time + " \u7761\u9192\u4E86");
    };
    return American;
}(People));
var peoples = [
    new Chinese("张三", 8),
    new American("Tom", 20),
];
//# sourceMappingURL=js多态.js.map