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
 * T 用来指代任意输入的类型
 * **/
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
var result1 = createArray(3, '111');
console.log(result1);
var result2 = createArray(2, 10);
console.log(result2);
