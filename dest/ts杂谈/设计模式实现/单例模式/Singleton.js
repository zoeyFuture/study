/**
 * 单例模式：在程序的生命周期内只有一个全局实例，并且不能在new出新的实例
 * 如：Cache ，ThreadPool
 * */
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        return this.instance;
    };
    Singleton.instance = new Singleton();
    return Singleton;
}());
//# sourceMappingURL=Singleton.js.map