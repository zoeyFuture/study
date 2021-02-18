/**
 *
 * 建造者模式（Builder）
 *  一步一步构建复杂对象，可以用不同的组合或顺序建造不同意义的对象，通常使用者并不需要知
 *  道建造的细节，通常使用链式调用来构建对象
 * */
enum HttpMethod {
    GET,
    POST,
};

class HttpRequest {}

/**
 * RequestBuilder 根据传进来的参数构造不同的对象，可以按照需求来生成想要的对象
 * */
class RequestBuilder {
    private _method: HttpMethod;
    private _headers: { [key: string]: string } = {};
    private _querys: { [key: string]: string } = {};
    private _body: string;

    setMethod(method: HttpMethod): RequestBuilder {
        this._method = method;
        return this;
    }

    setHeader(key: string, value: string): RequestBuilder {
        this._headers[key] = value;
        return this;
    }

    setQuery(key: string, value: string): RequestBuilder {
        this._querys[key] = value;
        return this;
    }

    setBody(body: string): RequestBuilder {
        this._body = body;
        return this;
    }

    build(): HttpRequest {
        // 根据配置信息，生成 HttpRequest
        return new HttpRequest();
    }
}

let getRequest = new  RequestBuilder()
    .setMethod(HttpMethod.GET)
    .setQuery('name', 'Tom')
    .build();

let postRequest = new RequestBuilder()
    .setMethod(HttpMethod.POST)
    .setHeader('ContentType', 'application/json')
    .setBody('body')
    .build();
