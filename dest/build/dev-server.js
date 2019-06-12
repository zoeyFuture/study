var opn = require('opn');
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.conf');
var express = require('express');
console.info('设置server启动配置');
var port = 3000;
var app = express();
console.info('编译webpack配置');
var compiler = webpack(webpackConfig);
console.info('webpack编译完成');
console.info('将编译流通过webpack-dev-middleware');
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    lazy: false,
    stats: {
        chunks: false,
        chunkModules: false,
        colors: true,
    },
    watchOptions: {
        ignored: /node_modules/,
    },
});
console.info('将编译流通过webpack-hot-middleware');
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: function () { },
    heartbeat: 2000,
});
console.info('监听HTML文件改变事件');
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});
console.info('设置静态文件托管目录');
app.use('/dist', express.static('public'));
console.info('设置代理信息');
require('./dev-proxy')(app);
console.info('添加webpack-dev-middleware中间件');
app.use(devMiddleware);
console.info('添加webpack-hot-middleware中间件');
app.use(hotMiddleware);
var uri = "http://localhost:" + port;
console.info('> Starting dev server...');
console.info('设置webpack-dev-middleware中间件编译后的回调');
devMiddleware.waitUntilValid(function () {
    console.info("> Listening at " + uri + "\n");
    opn(uri);
});
console.info("server\u5F00\u59CB\u76D1\u542C\u7AEF\u53E3" + port);
var server = app.listen(port);
//# sourceMappingURL=dev-server.js.map