var async = require('demo/node/异步串行/async/async');
console.log('/******************async.series*************************/');
async.series([
    function (callback) {
        setTimeout(function () {
            console.log('async.series task1');
            callback(null, 'success1');
        });
    },
    function (callback) {
        setTimeout(function () {
            console.log('async.series task2');
            callback(null, 'success2');
        });
    },
    function (callback) {
        setTimeout(function () {
            console.log('async.series task3');
            callback('error', 'failed3');
        });
    }
], function (err, values) {
    console.log("async.series finally " + err + " " + values);
});
console.log('/******************async.parallel*************************/');
async.parallel([
    function (callback) {
        setTimeout(function () {
            console.log('async.parallel task1');
            callback(null, 'success1');
        });
    },
    function (callback) {
        setTimeout(function () {
            console.log('async.parallel task2');
            callback(null, 'success2');
        });
    },
    function (callback) {
        setTimeout(function () {
            console.log('async.parallel task3');
            callback('error', 'failed3');
        });
    }
], function (err, values) {
    console.log("async.parallel finally " + err + " " + values);
});
console.log('/******************async.waterfall*************************/');
async.waterfall([
    function (callback) {
        setTimeout(function () {
            console.log('async.waterfall task1');
            callback(null, 'success1');
        });
    },
    function (param, callback) {
        setTimeout(function () {
            console.log("async.waterfall task2 param: " + param);
            callback(null, 'success2');
        });
    },
    function (param, callback) {
        setTimeout(function () {
            console.log("async.waterfall task3 param: " + param);
            callback('error', 'failed3');
        });
    }
], function (err, values) {
    console.log("async.waterfall finally " + err + " " + values);
});
//# sourceMappingURL=async.js.map