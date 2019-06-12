define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.count = 10;
    function addCount(num) {
        exports.count += num;
        return false;
    }
    exports.addCount = addCount;
    function getCount() {
        return exports.count;
    }
    exports.getCount = getCount;
});
//# sourceMappingURL=es6.js.map