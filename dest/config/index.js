var path = require('path');
module.exports = {
    dev: {
        env: require('./dev.env'),
        port: 8080,
        assetsPublicPath: '/',
        assetsSubDirectory: 'assets',
        autoOpenBrowser: true,
        cssSourceMap: false,
        devtool: 'cheap-module-eval-source-map',
        bundleAnalyzerReport: true,
        proxyOptions: require('./proxy')
    },
    test: {
        env: require('./prod.env'),
        assetsPublicPath: '/',
        assetsSubDirectory: 'template_assets',
    },
    build: {
        env: require('./prod.env'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: './',
        assetsSubDirectory: 'template_assets',
        productionSourceMap: true,
        devtool: '#source-map'
    }
};
//# sourceMappingURL=index.js.map