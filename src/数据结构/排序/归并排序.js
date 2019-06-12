// 将数组进行分割，分别排序子数组，然后合并
function mergeSort(array) {
  const len = array.length;
  if (len < 2) {
    return array;
  }

  const middle = Math.floor(len/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift())
    }
  }
  while(left.length) {
    result.push(left.shift())
  }
  while(right.length) {
    result.push(right.shift());
  }
  return result;
}

const array = [1,9,1,3,5,2,4,6];
console.log('归并排序：', mergeSort(array));
