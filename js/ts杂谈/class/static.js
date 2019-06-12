/**
 * ts 静态属性、静态方法
 * */
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 20;
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + " \u6B63\u5728\u8DD1\u6B65...");
    };
    // 静态方法，不能直接调用类属性，只能访问类静态属性
    Person.print = function () {
        console.log("print -> " + Person.sex);
    };
    Person.sex = "男"; // 静态属性
    return Person;
}());
Person.print();
//# sourceMappingURL=static.js.map