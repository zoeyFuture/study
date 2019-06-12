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
//# sourceMappingURL=app.js.map