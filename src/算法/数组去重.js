/**
 * 方法：
 *  简单遍历，reduce，includes, indexOf, in, filter, map ...
 * */
const str = 'qbssabsdhbce';
const strArray = str.split('');

console.log('strArray:', strArray);

// const unique1 = (array) => {
//   let result = [];
//   array.forEach(d => {
//     if (!result.includes(d)) {
//       result.push(d);
//     }
//   });
//   return result;
// }
//
// console.time('includes');
// console.log(unique1(strArray))
// console.timeEnd('includes'); // 0.375ms

// const unique2 = (array) => {
//   let result = [];
//   array.forEach(d => {
//     if (result.indexOf(d) === -1) {
//     result.push(d);
//   }
// });
//   return result;
// }
//
// console.time('indexOf');
// console.log(unique2(strArray))
// console.timeEnd('indexOf'); // 0346ms
//
//
// const unique3 = (array) => {
//   let result = [];
//   array.forEach(d => {
//     if (!(d in result)) {
//     result.push(d);
//   }
// });
//   return result;
// }
//
// console.time('in');
// console.log(unique3(strArray));
// console.timeEnd('in'); // 0.382ms

const unique4 = (array) => {
  return array.filter((d, i, self) => self.indexOf(d) === i);
}

console.time('filter');
console.log(unique4(strArray));
console.timeEnd('filter'); // 0.344ms



