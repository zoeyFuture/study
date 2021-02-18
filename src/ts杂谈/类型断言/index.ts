// 联合类型

let params: string | number;
params = '字符串类型';
params = 10;

// 作为函数参数
function getLength(str: string | number) {
    // 类型断言，即检测类型，类型断言不是类型转换，断言成一个联合类型不存在的类型是不允许的
    if((<string>str).length) {
        return (<string>str).length;
    } else {
        return str.toString().length;
    }
}
