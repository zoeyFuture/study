var _ = require('lodash');
var path = require('path');
var httpProxy = require('http-proxy');
var Promise = require('bluebird');
var request = require('request');
var chokidar = require('chokidar');
var proxyConfig = require('../config/proxy');
var proxyRespJson = require('node-http-proxy-json');
var proxy = httpProxy.createProxyServer();
Promise.promisifyAll(request);
var mockData = {};
var mockDataPath = path.resolve(__dirname, '../mockData');
chokidar.watch(mockDataPath).on('change', function (filepath) {
    console.info('mock数据变化，重新加载', filepath);
    loadMockData();
});
function loadMockData() {
    try {
        Object.keys(require.cache).forEach(function (cachePath) {
            if (cachePath.startsWith(mockDataPath)) {
                delete require.cache[cachePath];
            }
        });
        mockData = require(mockDataPath);
    }
    catch (error) {
        console.error('加载mock数据异常', error);
    }
}
proxy.on('error', function (err, req, res) {
    console.error('代理失败:', err);
});
proxy.on('proxyReq', function (proxyReq) {
    console.info('发起请求！');
});
proxy.on('proxyRes', function (proxyRes, req, res) {
    console.log("\u8BF7\u6C42\u4EE3\u7406\u72B6\u6001: " + proxyRes.statusCode + "  <==>  path: " + req.path);
    var useMockStatusCode = [404, 403, 500];
    if (useMockStatusCode.indexOf(proxyRes.statusCode) !== -1) {
        var _writeHead_1 = res.writeHead;
        Object.assign(res, {
            writeHead: function () {
                _writeHead_1.apply(res, [200, proxyRes.headers]);
            }
        });
        proxyRespJson(res, proxyRes.headers['content-encoding'], function (body) {
            console.info('请求远端服务异常，采用本地mock数据', req.path);
            var callback = mockData[req.path];
            return callback ? callback(req) : {};
        });
    }
});
module.exports = function (app) {
    _.forIn(proxyConfig.rules, function (rule) {
        rule.urls.forEach(function (url) {
            url && app.all(url, function (req, res) {
                proxy.web(req, res, {
                    target: rule.host,
                    changeOrigin: true,
                    proxyTimeout: 10 * 60 * 1000
                });
            });
        });
    });
};
//# sourceMappingURL=dev-proxy.js.map