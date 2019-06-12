var EventProxy = require('eventProxy');
var fs = require('fs');
var ep = new EventProxy();
ep.all('event_one', 'event_two', 'event_three', function (msg1, msg2, msg3) {
    console.log("message " + msg1 + " " + msg2 + " " + msg3);
});
setTimeout(function () {
    ep.emit('event_one', 'event_one_message');
});
setTimeout(function () {
    ep.emit('event_two', 'event_two_message');
});
setTimeout(function () {
    ep.emit('event_three', 'event_three_message');
});
var intervalTimer = null;
ep.after('mult_event', 3, function () {
    console.log("\u5B9A\u65F6\u5668 " + intervalTimer + " \u88AB\u6E05\u7A7A");
    clearInterval(intervalTimer);
});
intervalTimer = setInterval(function () {
    console.log('触发定时器回调');
    ep.emit('mult_event');
}, 1000);
ep.after('read_file', 1, function (contents) {
    console.log(contents.join());
});
fs.readFile('./file1.txt', 'utf8', ep.done('read_file'));
//# sourceMappingURL=eventproxy.js.map