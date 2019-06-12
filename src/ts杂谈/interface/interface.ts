// 只读数组
let ro: ReadonlyArray<number> = [1, 2, 3];

// 定义接口 - 规范对象类型
interface Person {
    name: string,
    age: number,
    job?: string, // 可选属性
    readonly salary: number, // 只读属性
    readonly id: number,
    [ propName: string ] : any
};

let person: Person =  {
    name: 'Jack',
    age: 28,
    job: 'IT man',
    id: 1111,
    salary: 2222,
};

function printf(person: Person) {
    console.log(`${person.name} 你好`);
}

/*********************接口高级应用********************************/

// 接口一 - 规范函数类型
interface SearchFunc {
    (source: string, subString: string) : boolean;
}

let mySeach: SearchFunc;
mySeach = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

// 接口二 - 规范数组
interface StringArray {
    [index: number]: string; // 规范索引器的类型只能是 number
};
let myArray: StringArray;
myArray = ['Bob', 'Fred'];
let myStr: string = myArray[0];


// 接口三 - 类类型
// 定义一个接口，有一个属性和方法
interface IClock {
    currentTime: Date;
    getTime(d: Date): any;
};
// 接口实现
class Time implements IClock {
    currentTime: Date;
    getTime(d: Date) {
        this.currentTime = d;
    }
}

// 接口四 - 混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter> function(start: number){};
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;















