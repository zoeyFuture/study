var str = 'qbssabsdhbce';
var strArray = str.split('');
var cMap = {};
var c = strArray.reduce(function (total, d, i, array) {
    if (!cMap[d]) {
        cMap[d] = 1;
    }
    else {
        cMap[d]++;
    }
    return cMap[d] > cMap[total] ? d : total;
}, strArray[0]);
console.log('strArray:', strArray);
console.log('c:', c);
var unique4 = function (array) {
    return array.filter(function (d, i, self) { return self.indexOf(d) === i; });
};
console.time('filter');
console.log(unique4(strArray));
console.timeEnd('filter');
//# sourceMappingURL=统计最多字符.js.map