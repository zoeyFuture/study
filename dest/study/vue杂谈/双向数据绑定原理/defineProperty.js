function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return val;
        },
        set: function (_val) {
            val = _val;
            console.log("\u5C5E\u6027 " + key + " \u5DF2\u88AB\u4FEE\u6539\uFF0C\u65B0\u503C\uFF1A" + val);
        }
    });
}
//# sourceMappingURL=defineProperty.js.map