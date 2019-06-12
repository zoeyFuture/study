var arr = [
    'Tome', 'Jerry', 'Mark'
];
console.log('======================== forEach ===========================');
arr.forEach(function (value) {
    if (value === 'Jerry') {
        console.log('ready break - false ---- ');
        return false;
    }
    console.log("" + value);
});
console.log('------------------------');
try {
    arr.forEach(function (value) {
        if (value === 'Jerry') {
            console.log('ready break ---- ');
            throw new Error('break');
        }
        console.log("" + value);
    });
}
catch (err) {
    console.log('err:', err);
}
console.log('======================== for in ===========================');
var obj = {
    name: 'Tome',
    age: 10,
    desc: "我是Tome，今年20岁",
};
for (var key in obj) {
    console.log(key + ":" + obj[key]);
}
console.log('------------------------');
for (var key in arr) {
    console.log(key + ":" + arr[key]);
}
console.log('======================== for of ===========================');
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    console.log("" + value);
}
//# sourceMappingURL=index.js.map