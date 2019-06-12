var array = [10, 20, 1, 2];
console.log('sort:', array.sort());
function sortOrder(x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}
console.log('sort:', array.sort(sortOrder));
//# sourceMappingURL=排序.js.map