// https://www.cnblogs.com/libin-1/p/7719537.html

//冒泡排序
var dataStore = [ 72 , 1 , 68 , 95 , 75 , 54 , 58 , 10 , 35 , 6 , 28 , 45 , 69 , 13 , 88 , 99 , 24 , 28 , 30 , 31 , 78 , 2 , 77 , 82 , 72 ];

console.log( '原始数据:' + dataStore );
function bubbleSort ( data ) {
  var temp = 0;
  for ( var i = data.length ; i > 0 ; i -- ){
    for( var j = 0 ; j < i - 1 ; j++){
      if( data[j] > data[j + 1] ){
        temp = data[j];
        data[j] = data [j+1];
        data[j+1] = temp;
      }
    }
  }
  return data;
}

console.log( '冒泡排序:' + bubbleSort( dataStore) );

// 选择排序
function selectionSort( data ) {
  for( var i = 0; i< data.length ; i++){
    var min = data[i];
    var temp;
    var index = i;
    for( var j = i + 1; j< data.length; j++){
      if( data[j] < min ){
        min = data[j];
        index = j;
      }
    }

    temp = data[i];
    data[i] = min;
    data[index]= temp;
  }
  return data;
}

console.log( '选择排序:' + selectionSort( dataStore) );

// 插入排序
function insertionSort( data ) {
  var len = data.length;
  for (var i = 1; i < len; i++) {
    var key = data[i];
    var j = i - 1;
    while ( j >= 0 && data[j] > key) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = key;
  }
  return data;
}

//希尔排序
function shallSort(array) {
  var increment = array.length;
  var i
  var temp; //暂存
  do {
    //设置增量
    increment = Math.floor(increment / 3) + 1;
    for (i = increment ; i < array.length; i++) {
      if ( array[i] < array[i - increment]) {
        temp = array[i];
        for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
          array[j + increment] = array[j];
        }
        array[j + increment] = temp;
      }
    }
  }
  while (increment > 1)

  return array;
}

//归并排序

function mergeSort ( array ) {
  var len = array.length;
  if( len < 2 ){
    return array;
  }
  var middle = Math.floor(len / 2),
    left = array.slice(0, middle),
    right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length)
    result.push(left.shift());
  while (right.length)
    result.push(right.shift());
  return result;
}

//快速排序

function quickSort( arr ){
  if ( arr.length == 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push( arr[i] );
    } else {
      right.push( arr[i] );
    }
  }
  return quickSort( left ).concat( pivot, quickSort( right ));
}
