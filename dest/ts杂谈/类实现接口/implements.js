/**
 * 类实现接口案例：
 *   举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门
 *   添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作
 *   为一个接口，防盗门和车都去实现它
 *
 * **/
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
// 门
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
// 防盗门是 Door 的子类，并且有报警器的功能
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    return SecurityDoor;
}(Door));
// 汽车也是有报警器的功能
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    return Car;
}());
/***
 * 类可以实现多个接口，但是只能继承一个类
 *
 * 接口定义行为约束（规范）
 *
 * 类的继承代表了一类具有相同特征的抽象实体
 *
 * */
//# sourceMappingURL=implements.js.map