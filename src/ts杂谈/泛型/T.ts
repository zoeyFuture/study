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


