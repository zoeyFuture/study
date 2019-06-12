var SomeNameSpace;
(function (SomeNameSpace) {
    ;
    var SomeClassName = (function () {
        function SomeClassName() {
        }
        return SomeClassName;
    }());
    SomeNameSpace.SomeClassName = SomeClassName;
    SomeNameSpace.name = 'SomeNameSpace';
})(SomeNameSpace || (SomeNameSpace = {}));
//# sourceMappingURL=namespace.js.map