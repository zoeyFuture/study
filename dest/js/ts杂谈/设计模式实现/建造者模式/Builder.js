var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = 0] = "GET";
    HttpMethod[HttpMethod["POST"] = 1] = "POST";
})(HttpMethod || (HttpMethod = {}));
;
var HttpRequest = (function () {
    function HttpRequest() {
    }
    return HttpRequest;
}());
var RequestBuilder = (function () {
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