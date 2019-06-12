define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.say = function () {
        console.log('hello');
    };
    People.see = function () {
        console.log('how are you');
    };
    var People = (function () {
        function People(name, age) {
            this.name = name;
            this.age = age;
        }
        People.prototype.say = function () {
            console.log('hello');
        };
        People.see = function () {
            console.log('how are you');
        };
        return People;
    }());
});
//# sourceMappingURL=index.js.map