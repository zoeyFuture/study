
/**
 * 面向对象编程三要素：封装、继承、多态
 * **/

/**
 * Animal 使用抽象类，包含一个抽象方法
 * */
abstract class Animal {
    public name: string;

    constructor(_name: string) {
        this.name = _name;
    }

    // 抽象方法，不包含具体实现，要求子类中必须实现
    abstract eat(): any;

    run(){
        console.log('非抽象方法，不要子类实现、重写');
    }
}


class Dog extends Animal {
    eat() {
        return this.name + '爱啃骨头';
    }
}

class Cat extends Animal {
    eat() {
        return this.name + '爱吃鱼';
    }
}

const dog = new Dog('哈士奇');
const cat = new Cat("咖啡猫");
console.log(dog.eat(), cat.eat());


/**
 * 多态  -> 一种食物的不同表现形态，
 *
 * */
let fDog: Animal; // 声明变量类型  Animal 类型，具体类型只有在 new 的时候才知道
let fCat: Animal;

fDog = new Dog("金毛");
fCat = new Cat("汤姆");
console.log(fDog.eat(), fCat.eat());

