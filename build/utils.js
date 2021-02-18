var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var pagesConfig = require('../demo/config')
var HtmlWebpackPlugin = require('html-webpack-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

// css加载器的相关配置
exports.cssLoaders = function (options) {
  options = options || {}
  var cssLoader = {
    loader: 'css-loader',
    options: {
      // 根据不同的环境配置是否要对css文件进行压缩
      minimize: process.env.NODE_ENV === 'production',
      // 根据传入的配置决定是否生成sourceMap用于调试bug
      sourceMap: options.sourceMap
    }
  }
  // 定义名为"generateLoaders"的函数用于配置css或css预处理器文件
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    // 如果有css预处理器文件（如less、sass、stylus等）
    if (loader) {
      loaders.push({
        // 使用该预处理器对应的加载器
        loader: loader + '-loader',
        // 创建一个空对象，将css加载器初始配置与该预处理器的特殊配置进行合并
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    // 是否将入口文件（main.js）中引入的css文件一起打包进该文件的css中
    // 根据传入的options.extract的值进行判断（一般在生产环境中会去单独打包）
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'style-loader'
      })
    } else {
      return ['style-loader'].concat(loaders)
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
  }
}

exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  // 循环cssLoaders返回出来的所有文件类型
  for (var extension in loaders) {
    var loader = loaders[extension]
    // 对每一个文件类型用其相对应的加载器进行处理
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.getEntrys = function () {
  const entrys = {};
  pagesConfig.pages.forEach(page => {
    entrys[page] = `./src/page/${page}/index.js`
  });
  return entrys;
}

exports.getHtmls = function(minimize) {
  if(minimize) {
    return pagesConfig.pages.map((page) => (
      new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template:  `./src/page/${page}/index.html`,
        inject: true,
        chunks: [`${page}`, 'vendor', 'manifest'],
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        },
        chunksSortMode: 'dependency',
      })
    ));
  }

  return pagesConfig.pages.map((page) => (
    new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template:  `./src/page/${page}/index.html`,
      inject: true,
      chunks: [`${page}`, 'vendor', 'manifest'],
    })
  ));
}
