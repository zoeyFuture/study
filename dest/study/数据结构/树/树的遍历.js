var treeData = [
    {
        key: 'A',
        children: [
            {
                key: 'B',
                children: [
                    {
                        key: 'D',
                    }, {
                        key: 'E',
                        children: [
                            {
                                key: 'I',
                            }
                        ],
                    }
                ],
            }, {
                key: 'C',
                children: [
                    {
                        key: 'F',
                    }, {
                        key: 'G',
                    }, {
                        key: 'H'
                    }
                ],
            }
        ],
    }
];
var result = [];
console.log('*******************************深度优先遍历*****************************');
var DEPTH_TYPE = {
    REC_LR: 0,
    REC_RL: 1,
    STACK: 2,
};
var traverTreeDFS = function (tree, type) {
    var DFSerachResult = [];
    var callback = function (node) {
        DFSerachResult.push(node);
    };
    var hasChild = function (node) {
        return Array.isArray(node.children);
    };
    var traverLRDFS = function (treeSource, cb) {
        treeSource.forEach(function (d) {
            if (hasChild(d)) {
                traverLRDFS(d.children, cb);
            }
            cb(d);
        });
    };
    var traverRLDFS = function (treeSource, cb) {
        treeSource.reverse().forEach(function (d) {
            if (hasChild(d)) {
                traverRLDFS(d.children, cb);
            }
            cb(d);
        });
    };
    var traverStack = function (treeSource, cb) {
        var hasChildNodes = treeSource;
        while (hasChildNodes.length > 0) {
            var node = hasChildNodes.pop();
            if (hasChild(node)) {
                node.children.forEach(function (d) {
                    return hasChildNodes.push(d);
                });
            }
            cb(node);
        }
    };
    var traverType = {
        0: traverLRDFS,
        1: traverRLDFS,
        2: traverStack,
    };
    traverType[type](tree, callback);
    return DFSerachResult;
};
var dfsTree = JSON.parse(JSON.stringify(treeData));
var dfsLRResult = traverTreeDFS(dfsTree, DEPTH_TYPE.REC_LR);
result = dfsLRResult.map(function (d) { return d.key; });
console.log('深度优先遍历结果 正向：', result);
var dfsTree = JSON.parse(JSON.stringify(treeData));
var dfsRLResult = traverTreeDFS(dfsTree, DEPTH_TYPE.REC_RL);
result = dfsRLResult.map(function (d) { return d.key; });
console.log('深度优先遍历结果 反向：', result);
var dfsTree = JSON.parse(JSON.stringify(treeData));
var dfsStackResult = traverTreeDFS(dfsTree, DEPTH_TYPE.STACK);
result = dfsStackResult.map(function (d) { return d.key; });
console.log('深度优先遍历结果  栈：', result.reverse());
console.log('*******************************广度优先遍历*****************************');
var traverTreeBFS = function (tree) {
    var BFSearchResult = [];
    var callback = function (node) {
        BFSearchResult.push(node);
    };
    var hasChild = function (node) {
        return Array.isArray(node.children);
    };
    var traverBFS = function (treeSource, cb) {
        var hasChildNodes = treeSource;
        while (hasChildNodes.length > 0) {
            var node = hasChildNodes.shift();
            cb(node);
            if (hasChild(node)) {
                node.children.forEach(function (d) {
                    hasChildNodes.push(d);
                });
            }
        }
    };
    traverBFS(tree, callback);
    return BFSearchResult;
};
var bfsTree = JSON.parse(JSON.stringify(treeData));
var bfsResult = traverTreeBFS(treeData);
result = bfsResult.map(function (d) { return d.key; });
console.log('广度优先遍历结果：', result);
console.log('*******************************搜索树*****************************');
//# sourceMappingURL=树的遍历.js.map