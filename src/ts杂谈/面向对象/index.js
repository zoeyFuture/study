var DaoServiceImpl1 = /** @class */ (function () {
    function DaoServiceImpl1() {
    }
    DaoServiceImpl1.prototype.add = function () {
        return 1;
    };
    return DaoServiceImpl1;
}());
var DaoServiceImpl2 = /** @class */ (function () {
    function DaoServiceImpl2() {
    }
    DaoServiceImpl2.prototype.add = function () {
        return 2;
    };
    return DaoServiceImpl2;
}());
var daoService1 = new DaoServiceImpl1();
var daoService2 = new DaoServiceImpl2();
console.log(daoService1.add()); // 1
console.log(daoService2.add()); // 2
