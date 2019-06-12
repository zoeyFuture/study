var OwnCache = (function () {
    function OwnCache() {
        this._items = {};
    }
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
//# sourceMappingURL=app.js.map