/**
 * ts 静态属性、静态方法
 * */

class Person {
    public name: string;
    public age: number = 20;
    static sex = "男"; // 静态属性

    constructor(name: string) {
        this.name = name;
    }

    run(): void {
        console.log(`${this.name} 正在跑步...`);
    }

    // 静态方法，不能直接调用类属性，只能访问类静态属性
    static print() {
        console.log(`print -> ${Person.sex}`);
    }
}

Person.print();
