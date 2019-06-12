/**
 *
 * 建造者模式（Builder）
 *  一步一步构建复杂对象，可以用不同的组合或顺序建造不同意义的对象，通常使用者并不需要知
 *  道建造的细节，通常使用链式调用来构建对象
 * */
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = 0] = "GET";
    HttpMethod[HttpMethod["POST"] = 1] = "POST";
})(HttpMethod || (HttpMethod = {}));
;
var HttpRequest = /** @class */ (function () {
    function HttpRequest() {
    }
    return HttpRequest;
}());
/**
 * RequestBuilder 根据传进来的参数构造不同的对象，可以按照需求来生成想要的对象
 * */
var RequestBuilder = /** @class */ (function () {
    function RequestBuilder() {
        this._headers = {};
        this._querys = {};
    }
    RequestBuilder.prototype.setMethod = function (method) {
        this._method = method;
        return this;
    };
    RequestBuilder.prototype.setHeader = function (key, value) {
        this._headers[key] = string;
        return this;
    };
    RequestBuilder.prototype.setQuery = function (key, value) {
        this._querys[key] = value;
        return this;
    };
    RequestBuilder.prototype.setBody = function (body) {
        this._body = body;
        return this;
    };
    RequestBuilder.prototype.build = function () {
        // 根据配置信息，生成 HttpRequest
    };
    return RequestBuilder;
}());
var getRequest = new RequestBuilder()
    .setMethod(HttpMethod.GET)
    .setQuery('name', 'Tom')
    .build();
var postRequest = new RequestBuilder()
    .setMethod(HttpMethod.POST)
    .setHeader('ContentType', 'application/json')
    .setBody('body')
    .build();
//# sourceMappingURL=Builder.js.map