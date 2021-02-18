// const patrn = /^(([^0][0-9]{0,8}|0)\.([0-]{0,2}))$/; // 支持两位小数

const patrn = /([1-9][0-9]{0,8}\0?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/; // 支持两位小数

console.log(patrn.test(12345678908898.11));
console.log(patrn.test(10.11));
console.log(patrn.test(101));
