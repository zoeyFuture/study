function mergeSort(array) {
    var len = array.length;
    if (len < 2) {
        return array;
    }
    var middle = Math.floor(len / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}
var array = [1, 9, 1, 3, 5, 2, 4, 6];
console.log('归并排序：', mergeSort(array));
//# sourceMappingURL=归并排序.js.map