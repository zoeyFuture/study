// 选中一个基准值，进行比较，小于它的放左边，大于他的放右边
function quickSort(array) {
  if (array.length == 0) {
    return array;
  }

  const left = [];
  const right = [];
  const pivot = array[0];

  for(let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.time()
const array = [1,9,1,3,5,2,4,6];
console.log('快速排序：', quickSort(array))
console.timeEnd()
