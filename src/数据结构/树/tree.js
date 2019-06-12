// 生成一个二叉排序树
// https://www.jianshu.com/p/73969b967d91
function BinaryTree() {
  // 创建节点
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  this.getRoot = function() {      // 从root开始通过left和right跟其他节点连接一起，得到root就相当于得到整颗树了
    return root;
  }

  this.insert = function(key) {
    var newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  var insertNode = function(node, newNode) {     // 构建二叉排序树
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  // 遍历树
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };
  var inOrderTraverseNode = function(node, callback) {   // 中序遍历
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);   // 遍历左子树
      callback(node.key);                         // 遍历根结点
      inOrderTraverseNode(node.right, callback);  // 遍历右子树
    }
  };

  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback)
  };
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  };

  // 先序遍历
  var preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      callback(node.key); // 遍历跟节点
      preOrderTraverseNode(node.left, callback); // 遍历左子树
      preOrderTraverseNode(node.right, callback); // 遍历右子树
    }
  };

  // 后序遍历
  var postOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback); // 遍历左子树
      postOrderTraverseNode(node.right, callback); // 遍历右子树
      callback(node.key); // 遍历根节点
    }
  };

  // 查找最大值和最小值
  this.getMin = function() {
    return getMinNode(root);
  };
  this.getMax = function() {
    return getMaxNode(root);
  };

  // 获取最小节点
  var getMinNode = function(node) {
    if (node) {
      while (node.left) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  // 获取最大节点
  var getMaxNode = function(node) {
    if (node) {
      while (node.right) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  // 查询节点信息
  this.search = function(key) {
    return searchNode(root, key);
  };

  // 查找元素
  var searchNode = function(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);    // 注意递归中要return回来
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  };

  // 删除节点
  this.remove = function(key) {
    root = removeNode(root, key);
  };

  var removeNode = function(node, key) {   // 最终返回的是root元素
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key); // 递归的最后一层返回是null，而此时node即为删除的节点的父节点。递归的最前一层返回的是root
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) { // 如果是叶子节点，直接删除
        node = null;
        return node;
      }

      if (node.left === null) {  // 如果只有右子树，直接用右子树取代该节点
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // 当有两个孩子时
      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };

  var findMinNode = function(node) {
    if (node) {
      while (node.left) {
        node = node.left;
      }
      return node;   // 与前面不同的是返回了node而不是其值。
    }
    return null;
  };

  // 层次遍历
  this.levelOrder = function(callback) {
    var arr = [];
    levelOrderNode(root, callback, arr);
  }

  var levelOrderNode = function(node, callback, arr) {
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
  }
}

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();

nodes.forEach((key) => {
  binaryTree.insert(key);
});
console.log(binaryTree.getRoot());

var callback = function(key) {
  console.log(key);
}

console.log('中序遍历:');
binaryTree.inOrderTraverse(callback);

console.log('前序遍历:');
binaryTree.preOrderTraverse(callback);

console.log('后序遍历:');
binaryTree.postOrderTraverse(callback);
