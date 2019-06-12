var DispatchCenter = (function () {
    function DispatchCenter() {
        this.subscribers = [];
    }
    DispatchCenter.prototype.addSubscriber = function (subscriber) {
        var _this = this;
        var isExist = this.subscribers.some(function (d) { return d === subscriber; });
        if (!isExist) {
            this.subscribers.push(subscriber);
        }
        return function () {
            _this.subscribers = _this.subscribers.filter(function (d) { return d != subscriber; });
        };
    };
    DispatchCenter.prototype.deliver = function (message) {
        this.subscribers.forEach(function (fn) { return fn(message); });
    };
    return DispatchCenter;
}());
var dispatchCenter = new DispatchCenter();
var a = function (message) {
    console.log("\u8BA2\u9605\u8005A\u6536\u5230\u8BA2\u9605\u4FE1\u606F\uFF1A" + message);
};
var b = function (message) {
    console.log("\u8BA2\u9605\u8005B\u6536\u5230\u8BA2\u9605\u4FE1\u606F\uFF1A" + message);
};
var unRegisterA = dispatchCenter.addSubscriber(a);
var unRegisterB = dispatchCenter.addSubscriber(b);
dispatchCenter.deliver('新园区A发布');
unRegisterA();
unRegisterB();
dispatchCenter.deliver('新园区B发布');
var Publish = (function () {
    function Publish() {
    }
    return Publish;
}());
//# sourceMappingURL=发布订阅模式.js.map