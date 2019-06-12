var searchKey = 121;
var tree = [{
        id: 1,
        name: '结点1',
        children: [{
                id: 11,
                name: '结点11',
                children: [{
                        id: 111,
                        name: '结点111',
                    }, {
                        id: 112,
                        name: '结点112',
                    }],
            }, {
                id: 12,
                name: '结点12',
                children: [{
                        id: 121,
                        name: '结点121',
                    }],
            }, {
                id: 13,
                name: '结点13',
                children: [{
                        id: 131,
                        name: '结点131',
                    }, {
                        id: 132,
                        name: '结点132',
                        children: [{
                                id: 1321,
                                name: '结点111',
                            }],
                    }],
            },],
    },];
var isLeaf = function (node, key) {
    if (key === void 0) { key = searchKey; }
    if (node.id === searchKey) {
        return true;
    }
    return false;
};
var back = function (node, callback) {
    if (!Array.isArray(node.children)) {
        return isLeaf(node);
    }
    else {
        var result_1 = false;
        node.children.forEach(function (d) {
            var res = back(d, callback);
            if (res) {
                callback(d);
            }
            result_1 = result_1 || res;
        });
        return result_1;
    }
};
var iterativeBacktrack = function (node, callback) {
    var t = node;
    var key = searchKey;
    var _loop_1 = function () {
        var temp = t.shift();
        if (Array.isArray(temp.children)) {
            temp.children.forEach(function (d) {
                if (isLeaf(d, key)) {
                    key = temp.id;
                    callback(d);
                }
                else {
                    t.push(d);
                }
            });
        }
        else {
            t.pop();
        }
    };
    while (t.length > 0) {
        _loop_1();
    }
};
console.time();
var callback = function (node) {
    console.log('匹配路径：', node.id);
};
console.log('回朔算法递归实现：');
tree.forEach(function (d) {
    back(d, callback);
});
console.log('回朔算法递推实现：');
iterativeBacktrack(tree, callback);
console.timeEnd();
//# sourceMappingURL=回朔法.js.map