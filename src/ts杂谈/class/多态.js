/**
 * 面向对象编程三要素：封装、继承、多态
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
/**
 * Animal 使用抽象类，包含一个抽象方法
 * */
var Animal = /** @class */ (function () {
    function Animal(_name) {
        this.name = _name;
    }
    Animal.prototype.run = function () {
        console.log('非抽象方法，不要子类实现、重写');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '爱啃骨头';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '爱吃鱼';
    };
    return Cat;
}(Animal));
var dog = new Dog('哈士奇');
var cat = new Cat("咖啡猫");
console.log(dog.eat(), cat.eat());
/**
 * 多态  -> 一种食物的不同表现形态，
 *
 * */
var fDog; // 声明变量类型  Animal 类型，具体类型只有在 new 的时候才知道
var fCat;
fDog = new Dog("金毛");
fCat = new Cat("汤姆");
console.log(fDog.eat(), fCat.eat());
//# sourceMappingURL=多态.js.map