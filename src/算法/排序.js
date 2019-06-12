const array = [10, 20, 1, 2];
console.log('sort:', array.sort()); // [ 1, 10, 2, 20 ] - 因为 sort 是将数字转字符后排序的

// 自定义排序条件
function sortOrder(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}
console.log('sort:', array.sort(sortOrder)); // [ 1, 2, 10, 20 ]



