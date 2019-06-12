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
//# sourceMappingURL=Triangle.js.map