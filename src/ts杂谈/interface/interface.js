// 只读数组
var ro = [1, 2, 3];
;
var person = {
    name: 'Jack',
    age: 28,
    job: 'IT man',
    id: 1111,
    salary: 2222,
};
function printf(person) {
    console.log(person.name + " \u4F60\u597D");
}
var mySeach;
mySeach = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
;
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
;
// 接口实现
var Time = /** @class */ (function () {
    function Time() {
    }
    Time.prototype.getTime = function (d) {
        this.currentTime = d;
    };
    return Time;
}());
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
//# sourceMappingURL=interface.js.map