console.group("第一组信息");
console.log("第一组第一条：我的博客");
console.group("第一组第二条：CSDN");
console.log("第一组第二条：CSDN");
console.log("第一组第二条：CSDN");
console.log("第一组第二条：CSDN");
console.groupEnd();
console.groupEnd();
console.group("第二组信息");
console.log("第二组第一条：程序爱好者QQ群");
console.log("第二组第二条：欢迎你加入");
console.groupEnd();
var testObj = false;
console.assert(testObj, '当testObj为false时才输出！');
console.time("控制台计时器");
for (var i = 0; i < 10000; i++) {
    for (var j = 0; j < 10000; j++) { }
}
console.timeEnd("控制台计时器");
function All() {
    for (var i = 0; i < 10; i++) {
        funcA(100);
    }
}
console.clear();
function funcA(count) {
    for (var i = 0; i < count; i++) {
        console.count('统计代码执行多少次');
    }
    ;
}
console.profile("性能分析器");
All();
console.profileEnd();
//# sourceMappingURL=console.js.map