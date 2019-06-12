var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.conf');
webpack(webpackConfig, function (err, stats) {
    console.log('配置完毕！');
});
//# sourceMappingURL=build.js.map