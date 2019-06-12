var str = 'qbssabsdhbce';
var strArray = str.split('');
console.log('strArray:', strArray);
var unique4 = function (array) {
    return array.filter(function (d, i, self) { return self.indexOf(d) === i; });
};
console.time('filter');
console.log(unique4(strArray));
console.timeEnd('filter');
//# sourceMappingURL=数组去重.js.map