const path = require('path')

module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsPublicPath: '/',
    assetsSubDirectory: 'assets',
    autoOpenBrowser: true,
    cssSourceMap: false,
    // source maps 是 webpack 打包生成的.map后缀文件，使得开发调试更加方便
    devtool: 'cheap-module-eval-source-map',
    bundleAnalyzerReport: true,
    proxyOptions: require('./proxy')
  },
  test: {
    env: require('./prod.env'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'template_assets', // 需修改
  },
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: './',
    assetsSubDirectory: 'template_assets', // 需修改
    productionSourceMap: true,
    devtool: '#source-map'
  }
}