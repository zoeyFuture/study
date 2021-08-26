var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 抽象类：抽象类是不能是梨花的
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log('其他方法可以不实现');
    };
    return Animal;
}());
var Zoo = /** @class */ (function () {
    function Zoo() {
        this.animals = [];
    }
    Zoo.prototype.addAnimal = function (animal) {
        this.animals.push(animal);
    };
    Zoo.prototype.feeding = function () {
        console.log('动物园投喂所有动物：');
        this.animals.forEach(function (animal) { return animal.eat(); });
    };
    return Zoo;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    // 抽象类的子类必须实现抽象类中的抽象方法
    Dog.prototype.eat = function () {
        console.log(this.name + '吃狗粮');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + '吃猫粮');
    };
    return Cat;
}(Animal));
var dog = new Dog('旺财');
dog.eat();
var cat = new Cat('杰瑞');
cat.eat();
// 动物园
var zoo = new Zoo();
zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.feeding();
