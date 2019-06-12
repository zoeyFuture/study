// 定义命名空间
var SomeNameSpace;
(function (SomeNameSpace) {
    ;
    var SomeClassName = /** @class */ (function () {
        function SomeClassName() {
        }
        return SomeClassName;
    }());
    SomeNameSpace.SomeClassName = SomeClassName;
    SomeNameSpace.name = 'SomeNameSpace';
})(SomeNameSpace || (SomeNameSpace = {}));
//# sourceMappingURL=namespace.js.map