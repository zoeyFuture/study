import { isPropertyConfigurable } from "mobx/lib/internal";

// class 原理

// es5 通过构造函数声明类
function People(name, age) {
    this.name = name;
    this.age = age;
}
People.prototype.say = function() {
    console.log('hello');
}
People.see = function() {
    console.log('how are you');
}

// es6 的 class 声明
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log('hello');
    }

    static see() {
        console.log('how are you');
    }
}