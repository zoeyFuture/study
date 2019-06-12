var Person = function (name) {
    this.name = name;
};
Person.prototype.sayHello = function () {
    console.log('Hello ' + this.name);
};
var person = new Person('Tom');
person.sayHello();
var New = function (Constructor) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    console.log(params);
    var obj = new Object();
    obj.__proto__ = Constructor.prototype;
    Constructor.call.apply(Constructor, [obj].concat(params));
    return obj;
};
console.log('new 的实现：');
var newPerson = New(Person, 'Joke');
newPerson.sayHello();
console.log(newPerson instanceof Person);
console.log(newPerson.__proto__ === Person.prototype);
var array = [1, 2, 3];
console.log(Object.prototype.toString.call(array));
console.log(Array.isArray(array));
//# sourceMappingURL=new instanceof typeof.js.map