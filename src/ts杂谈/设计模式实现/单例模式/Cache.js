var OwnCache = /** @class */ (function () {
    function OwnCache() {
        // 对象，key为string，存放的值为string
        this._items = {};
    }
    // 配置构造函数私有，外部不可访问
    OwnCache.prototype.OwnCache = function () {
    };
    OwnCache.prototype.set = function (key, value) {
        this._items[key] = value;
        console.log("set cache with key: '" + key + "', value: '" + value + "'");
    };
    OwnCache.prototype.get = function (key) {
        var value = this._items[key];
        console.log("get cache value: '" + value + "' with key: '" + key + "'");
        return value;
    };
    OwnCache.Instance = new OwnCache();
    return OwnCache;
}());
;
OwnCache.Instance.set('name', 'Tom');
OwnCache.Instance.get('name');
/**
 * 抛出问题：
 *  1、TS class 默认属性访问权限
 *
 * */
//# sourceMappingURL=Cache.js.map