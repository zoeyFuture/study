function BinaryTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null;
    this.getRoot = function () {
        return root;
    };
    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        }
        else {
            insertNode(root, newNode);
        }
    };
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                insertNode(node.right, newNode);
            }
        }
    };
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    };
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    };
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    };
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };
    this.getMin = function () {
        return getMinNode(root);
    };
    this.getMax = function () {
        return getMaxNode(root);
    };
    var getMinNode = function (node) {
        if (node) {
            while (node.left) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };
    var getMaxNode = function (node) {
        if (node) {
            while (node.right) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };
    this.search = function (key) {
        return searchNode(root, key);
    };
    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        }
        else if (key > node.key) {
            return searchNode(node.right, key);
        }
        else {
            return true;
        }
    };
    this.remove = function (key) {
        root = removeNode(root, key);
    };
    var removeNode = function (node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        }
        else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };
    var findMinNode = function (node) {
        if (node) {
            while (node.left) {
                node = node.left;
            }
            return node;
        }
        return null;
    };
    this.levelOrder = function (callback) {
        var arr = [];
        levelOrderNode(root, callback, arr);
    };
    var levelOrderNode = function (node, callback, arr) {
        if (node === null) {
            return;
        }
        arr.push(node);
        while (arr.length > 0) {
            var node = arr.shift();
            callback(node.key);
            if (node.left) {
                arr.push(node.left);
            }
            if (node.right) {
                arr.push(node.right);
            }
        }
    };
}
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach(function (key) {
    binaryTree.insert(key);
});
console.log(binaryTree.getRoot());
var callback = function (key) {
    console.log(key);
};
console.log('中序遍历:');
binaryTree.inOrderTraverse(callback);
console.log('前序遍历:');
binaryTree.preOrderTraverse(callback);
console.log('后序遍历:');
binaryTree.postOrderTraverse(callback);
//# sourceMappingURL=tree.js.map