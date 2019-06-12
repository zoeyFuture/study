console.log('======================== array ===========================');
var arr = [
    'Tome', 'Jerry', 'Mark'
];
arr.size = '3';
console.log('========================for in===========================');
for (var key in arr) {
    console.log(key + ":" + arr[key]);
}
console.log('========================for of===========================');
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    console.log("" + value);
}
console.log('======================== object ===========================');
var obj = {
    name: '张三',
    age: 10,
    desc: '初来乍到，小心为上',
};
console.log('======================== object-for in ===========================');
for (var key in obj) {
    console.log(key + " : " + obj[key]);
}
console.log('======================== object-for of ===========================');
var keys = Object.keys(obj);
for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
    var key = keys_1[_a];
    console.log(key + " : " + obj[key]);
}
//# sourceMappingURL=expand.js.map