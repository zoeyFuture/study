function argumentsTest(params) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log(arguments.length);
    for (var key in arguments) {
        console.log("key: " + key + ", value: " + arguments[key]);
    }
    for (var _a = 0, arguments_1 = arguments; _a < arguments_1.length; _a++) {
        var value = arguments_1[_a];
        console.log("value: " + value);
    }
    console.log(arguments instanceof Array);
}
argumentsTest(1, 2, 3, 4, 5, 6);
//# sourceMappingURL=function.js.map