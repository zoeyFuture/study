var Singleton = (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        return this.instance;
    };
    Singleton.instance = new Singleton();
    return Singleton;
}());
//# sourceMappingURL=Singleton.js.map