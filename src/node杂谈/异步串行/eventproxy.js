/**
 * EventProxy 仅仅是一个很轻量的工具， 但是能够带来一种事件式编程的思维变化。 有几个特点：
 * • 利用事件机制解耦复杂业务逻辑
 * • 移除被广为诟病的深度callback嵌套问题
 * • 将串行等待变成并行等待， 提升多异步协作场景下的执行效率
 * • 友好的Error handling• 无平台依赖， 适合前后端， 能用于浏览器和Node.js
 * • 兼容CMD， AMD以及CommonJS模块环境
 * * */
const EventProxy = require('eventProxy');
const fs = require('fs');

const ep = new EventProxy();

// ep.all 当所有的事件触发完毕后，执行回调方法
ep.all('event_one', 'event_two', 'event_three', (msg1, msg2, msg3) => {
    console.log(`message ${msg1} ${msg2} ${msg3}`); // message event_one_message event_two_message event_three_message
});

setTimeout(() => {
    ep.emit('event_one', 'event_one_message');
});
setTimeout(() => {
    ep.emit('event_two', 'event_two_message');
});
setTimeout(() => {
    ep.emit('event_three', 'event_three_message');
});

let intervalTimer = null;
// ep.after 表示 事件触发 n 次后，调用回调
ep.after('mult_event', 3, () => {
    console.log(`定时器 ${intervalTimer} 被清空`);
    clearInterval(intervalTimer);
});
intervalTimer = setInterval(() => {
    console.log('触发定时器回调');
    ep.emit('mult_event');
}, 1000);


// 当抛出异常时，执行回调
// ep.fail((msg) => {
//     // 错误，清除定时器
//     clearInterval(intervalTimer);
//     console.log(`fail message ${msg}`);
// });
// setTimeout(() => {
//     ep.emit('error', 'throw error');
// });

// ep.done 
ep.after('read_file', 1, function(contents) {
    console.log(contents.join());
});
fs.readFile('./file1.txt', 'utf8', ep.done('read_file')) // 省略匿名函数，直接抛出事件名与参数