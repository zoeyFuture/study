/**
 * Async的内容主要分为三部分
 流程控制： 简化九种常见的流程的处理
 集合处理： 如何使用异步操作处理集中的数据
 工具类： 几个常用的工具类

 学习地址： https: //www.cnblogs.com/chunzhulovefeiyue/p/7229735.html
 * * */
const async = require('demo/node/异步串行/async/async');

console.log('/******************async.series*************************/');
/**
 * async.series
 * 1、依次执行一个函数数组中的每个函数， 每一个函数执行完成之后才能执行下一个函数。
 * 2、如果任何一个函数向它的回调函数中传了一个error， 则后面的函数都不会被执行， 并且将会立刻将该error以及已经执行了的函数的结果， 传给series中最后的那个callback。
 * 3、将所有的函数执行完后(没有出错), 则会把每个函数传给其回调函数的结果合并为一个数组， 传给series最后的那个callback。
 * 4、还可以以json的形式提供tasks。 每一个属性都会被当作函数来执行， 并且结果也会以json形式传给series中最后的那个callback。 这种方式可读性更高
 * * */
async.series([
        (callback) => {
            setTimeout(() => {
                console.log('async.series task1');
                callback(null, 'success1');
            });
        },
        (callback) => {
            setTimeout(() => {
                console.log('async.series task2');
                callback(null, 'success2');
            });
        },
        (callback) => {
            setTimeout(() => {
                console.log('async.series task3');
                callback('error', 'failed3');
            });
        }
    ],
    function(err, values) {
        console.log(`async.series finally ${err} ${values}`);
    },
);
console.log('/******************async.parallel*************************/');
/**
 * async.parallel
 * 并行执行多个函数， 每个函数都是立刻执行， 不需要等待其他函数先执行。 传给最终callback的数组中的数据按照tasks声明的顺序， 而不是执行完成的顺序。
 如果某个函数出错， 则立刻将err和已经执行完的函数的结果值传给parallel最终的callback。 其它为执行完的函数的值不会传到最终数据， 但要占个位置。
 同时支持json形式的tasks， 其最终callback的结果也为json形式。
 * * * */
async.parallel([
        (callback) => {
            setTimeout(() => {
                console.log('async.parallel task1');
                callback(null, 'success1');
            });
        },
        (callback) => {
            setTimeout(() => {
                console.log('async.parallel task2');
                callback(null, 'success2');
            });
        },
        (callback) => {
            setTimeout(() => {
                console.log('async.parallel task3');
                callback('error', 'failed3');
            });
        }
    ],
    function(err, values) {
        console.log(`async.parallel finally ${err} ${values}`);
    },
);

console.log('/******************async.waterfall*************************/');
/**
 * async.waterfall(瀑布) 功能类似于 linux pipe（管道）
 * 并行执行多个函数， 每个函数都是立刻执行， 不需要等待其他函数先执行。 传给最终callback的数组中的数据按照tasks声明的顺序， 而不是执行完成的顺序。
 如果某个函数出错， 则立刻将err和已经执行完的函数的结果值传给parallel最终的callback。 其它为执行完的函数的值不会传到最终数据， 但要占个位置。
 同时支持json形式的tasks， 其最终callback的结果也为json形式。
 * * * */
async.waterfall([
        (callback) => {
            setTimeout(() => {
                console.log('async.waterfall task1');
                callback(null, 'success1');
            });
        },
        (param, callback) => {
            setTimeout(() => {
                console.log(`async.waterfall task2 param: ${param}`);
                callback(null, 'success2');
            });
        },
        (param, callback) => {
            setTimeout(() => {
                console.log(`async.waterfall task3 param: ${param}`);
                callback('error', 'failed3');
            });
        }
    ],
    function(err, values) {
        console.log(`async.waterfall finally ${err} ${values}`);
    },
);
