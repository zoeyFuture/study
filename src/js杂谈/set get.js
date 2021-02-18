console.log('===========================js set get=================================');
console.log('================================es5 - start===================================');

function Number(num) {
    this._num = num;
}
/**
 * 在原型中注入set、get方法
 * * */
Number.prototype = {
    get num() {
        console.log('get num:', this._num);
        return this._num;
    },

    set num(num) {
        this._num = num;
        console.log('set num:', this._num);
    },
};

const number = new Number(8);
let num = number.num; // 打印：get num: 8
console.log('-------------');
number.num = 88; // 打印：set num：88
num = number.num; // 打印：get num：88
console.log('================================es5 - end===================================');

console.log('================================es6 - start===================================');
class Num {
    constructor(num) {
        this._num = num;
    }

    get num() {
        console.log('Num get num:', this._num);
        return this._num;
    }

    set num(num) {
        this._num = num;
        console.log('Num set num:', this._num);
    }
}
const num1 = new Num(8);
let _num1 = num1.num; // 打印：Num get num: 8
num1.num = 88; // 打印：Num set num：88
_num1 = num1.num; // 打印：Num get num：88

console.log('================================es6 - end===================================');