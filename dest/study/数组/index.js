var arr1 = [1, 2, 3, 4];
var arr2 = arr1.filter(function (d) { return d === 2; });
console.log(arr2);
var arr3 = [].concat(arr1);
console.log('arr3:', [].concat(arr1));
console.log('arr3:', ([].push.apply([], arr1)));
//# sourceMappingURL=index.js.map