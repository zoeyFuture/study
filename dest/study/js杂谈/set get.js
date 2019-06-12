console.log('===========================js set get=================================');
console.log('================================es5 - start===================================');
function Number(num) {
    this._num = num;
}
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
var number = new Number(8);
var num = number.num;
console.log('-------------');
number.num = 88;
num = number.num;
console.log('================================es5 - end===================================');
console.log('================================es6 - start===================================');
var Num = (function () {
    function Num(num) {
        this._num = num;
    }
    Object.defineProperty(Num.prototype, "num", {
        get: function () {
            console.log('Num get num:', this._num);
            return this._num;
        },
        set: function (num) {
            this._num = num;
            console.log('Num set num:', this._num);
        },
        enumerable: true,
        configurable: true
    });
    return Num;
}());
var num1 = new Num(8);
var _num1 = num1.num;
num1.num = 88;
_num1 = num1.num;
console.log('================================es6 - end===================================');
//# sourceMappingURL=set get.js.map