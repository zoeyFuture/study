var Observer = (function () {
    function Observer(_name) {
        this.name = _name;
    }
    Observer.prototype.update = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.name + " - \u6536\u5230\u6D88\u606F\uFF1A" + args);
    };
    return Observer;
}());
var ObserverList = (function () {
    function ObserverList() {
        this.observerList = [];
    }
    ObserverList.prototype.add = function (observer) {
        return this.observerList.push(observer);
    };
    ObserverList.prototype.remove = function (observer) {
        this.observerList = this.observerList.filter(function (d) { return d !== observer; });
    };
    ObserverList.prototype.count = function () {
        return this.observerList.length;
    };
    ObserverList.prototype.get = function (index) {
        return this.observerList[index];
    };
    return ObserverList;
}());
var Subject = (function () {
    function Subject() {
        this.observerList = new ObserverList();
    }
    Subject.prototype.addObserver = function (observer) {
        this.observerList.add(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        this.observerList.remove(observer);
    };
    Subject.prototype.notify = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var observerCounts = this.observerList.count();
        for (var i_1 = 0; i_1 < observerCounts; i_1++) {
            (_a = this.observerList.get(i_1)).update.apply(_a, args);
        }
    };
    return Subject;
}());
var aObserver = new Observer('A');
var bObserver = new Observer('B');
var target = new Subject();
target.addObserver(aObserver);
target.addObserver(bObserver);
target.notify('新小区发售了');
//# sourceMappingURL=观察者模式.js.map