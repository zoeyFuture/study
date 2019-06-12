require('eventsource-polyfill');
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');
console.info('Creating Hot Hook');
hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload();
    }
});
//# sourceMappingURL=dev-client.js.map