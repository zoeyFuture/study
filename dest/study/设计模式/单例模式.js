var Sinleton = (function () {
    function Sinleton(name) {
        this.name = name;
        this.instance = null;
    }
    Sinleton.getInstance = function (name) {
        if (!this.instance) {
            this.instance = new Sinleton(name);
        }
        return this.instance;
    };
    return Sinleton;
}());
var NewSinleton = (function () {
    function NewSinleton(name) {
        this.name = name;
    }
    NewSinleton.getInstance = function (name) {
        if (!NewSinleton.instance || !NewSinleton.instance instanceof this) {
            NewSinleton.instance = new this(name);
        }
        return NewSinleton.instance;
    };
    return NewSinleton;
}());
var a = Sinleton.getInstance("a");
var b = Sinleton.getInstance("b");
console.log('a', 'b', a == b);
var c = NewSinleton.getInstance("c");
var d = NewSinleton.getInstance("d");
console.log('c', 'd', c == d);
//# sourceMappingURL=单例模式.js.map