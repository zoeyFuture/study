define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function throttle(fn, context, delay, maxApplyTime, params) {
        if (params === void 0) { params = {}; }
        clearTimeout(fn.timer);
        fn.current = Date.now();
        if (!fn.start) {
            fn.start = fn.current;
        }
        if (fn.current - fn.start > maxApplyTime) {
            fn.call(context, params);
            fn.start = fn.current;
        }
        else {
            fn.timer = setTimeout(function () {
                fn.call(context, params);
            }, delay);
        }
    }
    exports.throttle = throttle;
    function debounce(fn, context, delay, params) {
        if (params === void 0) { params = {}; }
        clearTimeout(fn.timer);
        fn.timer = setTimeout(function () {
            fn.apply(context, [params]);
        }, delay);
    }
    exports.debounce = debounce;
    function arrayClearRepeat(source) {
        var result = [];
        var hash = {};
        for (var i_1 = 0, item = void 0; (item = source[i_1]) != null; i_1 += 1) {
            if (!hash[item]) {
                result.push(item);
                hash[item] = true;
            }
        }
        return result;
    }
    exports.arrayClearRepeat = arrayClearRepeat;
});
//# sourceMappingURL=index.js.map