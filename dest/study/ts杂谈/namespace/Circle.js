var Drawing;
(function (Drawing) {
    var Circle = (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log('Circle is drawn');
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
//# sourceMappingURL=Circle.js.map