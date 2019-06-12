var path = require('path');
var config = require('../config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pagesConfig = require('../demo/config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
exports.assetsPath = function (_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory;
    return path.posix.join(assetsSubDirectory, _path);
};
exports.cssLoaders = function (options) {
    options = options || {};
    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap
        }
    };
    function generateLoaders(loader, loaderOptions) {
        var loaders = [cssLoader];
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            });
        }
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'style-loader'
            });
        }
        else {
            return ['style-loader'].concat(loaders);
        }
    }
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    };
};
exports.styleLoaders = function (options) {
    var output = [];
    var loaders = exports.cssLoaders(options);
    for (var extension in loaders) {
        var loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        });
    }
    return output;
};
exports.getEntrys = function () {
    var entrys = {};
    pagesConfig.pages.forEach(function (page) {
        entrys[page] = "./src/page/" + page + "/index.js";
    });
    return entrys;
};
exports.getHtmls = function (minimize) {
    if (minimize) {
        return pagesConfig.pages.map(function (page) { return (new HtmlWebpackPlugin({
            filename: page + ".html",
            template: "./src/page/" + page + "/index.html",
            inject: true,
            chunks: ["" + page, 'vendor', 'manifest'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            },
            chunksSortMode: 'dependency',
        })); });
    }
    return pagesConfig.pages.map(function (page) { return (new HtmlWebpackPlugin({
        filename: page + ".html",
        template: "./src/page/" + page + "/index.html",
        inject: true,
        chunks: ["" + page, 'vendor', 'manifest'],
    })); });
};
//# sourceMappingURL=utils.js.map