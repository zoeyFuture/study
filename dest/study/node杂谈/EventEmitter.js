var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('some_event', function (arg1, arg2) {
    console.log('some_event 事件触发1:', arg1, arg2);
});
eventEmitter.on('some_event', function (arg1, arg2) {
    console.log('some_event 事件触发2:', arg1, arg2);
});
setTimeout(function () {
    eventEmitter.emit('some_event', 'params1', 'params2');
}, 1000);
//# sourceMappingURL=EventEmitter.js.map