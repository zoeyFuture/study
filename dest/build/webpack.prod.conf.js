var path = require('path');
var utils = require('./utils');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var debug = require('debug')('app:config:prod');
var baseWebpackConfig = require('./webpack.base.conf');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;
var MergeRouterPlugin = require('./merge-router-plugin');
var zcyHtmlBaseData = require('./html-base-data');
debug("\u5408\u5E76webpack " + config.build.env.NODE_ENV + " \u73AF\u5883\u914D\u7F6E");
var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: true,
        }),
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
        chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].js'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.build.env,
            __DEV__: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap: true,
        }),
        new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash:8].css')),
        new CSSSplitWebpackPlugin({
            size: 3400,
            filename: utils.assetsPath('css/[name]-[part].css'),
        }),
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: './src/index.hbs',
            inject: true,
            data: zcyHtmlBaseData,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            },
            chunksSortMode: 'dependency',
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return (module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0);
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity,
        }),
    ],
});
if (config.build.bundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}
debug("\u5408\u5E76webpack " + config.build.env.NODE_ENV + " \u73AF\u5883\u914D\u7F6E\u6210\u529F");
module.exports = webpackConfig;
//# sourceMappingURL=webpack.prod.conf.js.map