/**
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 * */

// function createArray1(length: number, value: any): Array<any> {
//     let result: Array<any> = [];
//     for (let i = 0; i < length; i ++) {
//         result[i] = value;
//     }
//     return result;
// }

/**
 * createArray 后面的 T 用来指代任意输入的类型
 * **/
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for(let i = 0; i < length; i ++) {
        result[i] = value;
    }
    return result;
}

let result1 = createArray<string>(3, '111');
console.log(result1);

let result2 = createArray<number>(2, 10);
console.log(result2);



/*******一、使用范型定义函数参数与返回参数类型 *****************************************************************************/
// function echo(arg: number): number {
//   return arg
// }

// 类型变量
// 这里使用了类型变量 T，帮助我们捕获用户传入的类型
// 使用方式：
//  1、可以明确指定类型：echo<string>('123456')
//  2、利用 类型推导：echo('123456')
function echo<T>(arg: T): T {
    return arg
}

// 函数变量的类型
// 定义一个函数变量 identity，并将 echo 赋值给 identity
// const identity: <T>(arg: T) => T = echo
// 使用带有调用签名的对象来定义
// const identity: { <T>(arg: T): T } = echo

// 定义类型
interface GenericIdentityFn<T> {
    (arg: T): T;
}
const objectEcho: GenericIdentityFn<object> = echo
const booleanEcho: GenericIdentityFn<boolean> = echo

console.log(echo(123456))
console.log(echo('123456'))
console.log(objectEcho({ a: '123456' } ))
console.log(booleanEcho(true ))

/*******二、使用范型定义接口约束条件 *****************************************************************************/
// 接口约束条件：只能传入带有 length 属性的值
interface Lengthwise {
    length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}

// console.log(loggingIdentity(3)) // number 没有 length 属性
console.log(loggingIdentity('3'))
console.log(loggingIdentity([1, 2, 3]))

// 在范型约束中使用类型参数：录利用 keyof 获取 T 属性列表
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let obj = {
    a: '张三',
    b: '李四'
}
console.log('getProperty:', getProperty(obj, 'a'))


/*******三、使用原型属性推断并约束构造函数与类实例的关系 *****************************************************************************/
