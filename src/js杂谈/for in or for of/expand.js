
console.log('======================== array ===========================');
const arr = [
  'Tome', 'Jerry', 'Mark'
];
// arr.length = 2;
arr.size = '3';

console.log('========================for in===========================');
for (let key in arr) {
    console.log(`${key}:${arr[key]}`);
}
console.log('========================for of===========================');
for (let value of arr) {
    console.log(`${value}`);
}

console.log('======================== object ===========================');
/**
 * 使用 for in 遍历对象
 * * */
const obj = {
    name: '张三',
    age: 10,
    desc: '初来乍到，小心为上',
};
console.log('======================== object-for in ===========================');
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}
console.log('======================== object-for of ===========================');
// for of 结合 Object.keys() 便利对象属性
const keys = Object.keys(obj);
for (let key of keys) {
    console.log(`${key} : ${obj[key]}`);
}

// 报错：for of 不能遍历对象属性
// for (let value of obj) {
// console.log('value:', value);
// }
