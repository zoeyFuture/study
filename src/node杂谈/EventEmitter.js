const events = require('events');
// EventEmitter 的核心就是事件触发和时间监听器功能的封装
const eventEmitter = new events.EventEmitter();

// on 监听自定义事件
// 注册的事件按照注册顺序依次执行
eventEmitter.on('some_event', function(arg1, arg2) {
    console.log('some_event 事件触发1:', arg1, arg2);
});

eventEmitter.on('some_event', function(arg1, arg2) {
    console.log('some_event 事件触发2:', arg1, arg2);
});

setTimeout(function() {
    // 触发事件
    eventEmitter.emit('some_event', 'params1', 'params2');
}, 1000);