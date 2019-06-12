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
var Drawing;
(function (Drawing) {
    var Triangle = (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log('Triangle is drawn');
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
//# sourceMappingURL=app.js.map