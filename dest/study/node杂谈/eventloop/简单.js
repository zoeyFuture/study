console.log('task: 1');
setTimeout(function () {
    console.log('task: 2');
});
function asyncFunc() {
    console.log('task: 4');
    setTimeout(function () {
        console.log('task: 5');
    });
}
new Promise(function (resolve) {
    console.log('task: 6');
    asyncFunc();
    resolve();
    console.log('task: 7');
})
    .then(function () {
    console.log('task: 8');
    setTimeout(function () {
        console.log('setTimeout');
    });
    new Promise(function (resolve) {
        resolve();
    }).then(function () {
        console.log('task: 21');
    });
    process.nextTick(function () {
        console.log('task: 22');
    });
});
process.nextTick(function () {
    console.log('task: 3');
});
console.log('task: 9');
//# sourceMappingURL=简单.js.map