/**
 * 类实现接口案例：
 *   举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门
 *   添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作
 *   为一个接口，防盗门和车都去实现它
 *
 * **/

// 报警器接口
interface Alarm {
    alert(): void;
}

// 门
class Door {

}

// 防盗门是 Door 的子类，并且有报警器的功能
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

// 汽车也是有报警器的功能
class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}

/***
 * 类可以实现多个接口，但是只能继承一个类
 *
 * 接口定义行为约束（规范）
 *
 * 类的继承代表了一类具有相同特征的抽象实体
 *
 * */
