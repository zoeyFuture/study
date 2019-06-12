function quickSort(array) {
    if (array.length == 0) {
        return array;
    }
    var left = [];
    var right = [];
    var pivot = array[0];
    for (var i_1 = 1; i_1 < array.length; i_1++) {
        if (array[i_1] <= pivot) {
            left.push(array[i_1]);
        }
        else {
            right.push(array[i_1]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
console.time();
var array = [1, 9, 1, 3, 5, 2, 4, 6];
console.log('快速排序：', quickSort(array));
console.timeEnd();
//# sourceMappingURL=快速排序.js.map