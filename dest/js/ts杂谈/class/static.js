var Person = (function () {
    function Person(name) {
        this.age = 20;
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + " \u6B63\u5728\u8DD1\u6B65...");
    };
    Person.print = function () {
        console.log("print -> " + Person.sex);
    };
    Person.sex = "男";
    return Person;
}());
Person.print();
//# sourceMappingURL=static.js.map