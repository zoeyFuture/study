/***
 * 树的结构：
 *          A
 *        ／  \
 *        B   C
 *       /\   /|\
 *      D E  F G h
 *      \
 *      I
 *
 * 深度优先遍历结果：I D E B F G H C A
 * 广度优先遍历结果：A B C D E F G H I
 * **/
const treeData = [
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
        key : 'C',
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

let result = [];

/*
* 深度优先遍历，即按照 树的深度进行遍历，采用栈结构进行结点遍历，类似于二叉树的后序遍历
*
* 遍历结果：
* I D E B F G H C A
*
* 递归实现深度优先遍历
* **/
console.log('*******************************深度优先遍历*****************************');
const DEPTH_TYPE = {
  REC_LR: 0, // 正向递归遍历,
  REC_RL: 1, // 反向递归遍历,
  STACK: 2, // 栈,
};
const traverTreeDFS  = (tree, type) => {
  const DFSerachResult = [];

  const callback = (node) => {
    DFSerachResult.push(node);
  }

  // 判断是否有子节点
  const hasChild = (node) => {
    return Array.isArray(node.children);
  }

  // 深度优先遍历 - 正向递归遍历
  const traverLRDFS = (treeSource, cb) => {
    treeSource.forEach(d => {
      if (hasChild(d)) {
        traverLRDFS(d.children, cb);
      }
      cb(d);
    });
  }

  // 深度优先遍历 - 反向递归遍历
  const traverRLDFS = (treeSource, cb) => {
    treeSource.reverse().forEach(d => {
      if (hasChild(d)) {
        traverRLDFS(d.children, cb);
      }
      cb(d);
    });
  }

  // 不采用递归方式
  const traverStack = (treeSource, cb) => {
    const hasChildNodes = treeSource;

    while(hasChildNodes.length > 0) {
      const node = hasChildNodes.pop();
      if (hasChild(node)) {
        node.children.forEach(d =>
          hasChildNodes.push(d)
        );
      }
      cb(node);
    }
  }

  const traverType = {
    0: traverLRDFS,
    1: traverRLDFS,
    2: traverStack,
  };

  traverType[type](tree, callback);

  return DFSerachResult;
}
var dfsTree = JSON.parse(JSON.stringify(treeData));
let dfsLRResult = traverTreeDFS(dfsTree, DEPTH_TYPE.REC_LR);
result = dfsLRResult.map(d => d.key);
console.log('深度优先遍历结果 正向：', result); // l - r 深度优先遍历结果 正向： [ 'D', 'I', 'E', 'B', 'F', 'G', 'H', 'C', 'A' ]

var dfsTree = JSON.parse(JSON.stringify(treeData));
let dfsRLResult = traverTreeDFS(dfsTree, DEPTH_TYPE.REC_RL);
result = dfsRLResult.map(d => d.key);
console.log('深度优先遍历结果 反向：', result); // r - l 深度优先遍历结果 反向： [ 'H', 'G', 'F', 'C', 'I', 'E', 'D', 'B', 'A' ]

var dfsTree = JSON.parse(JSON.stringify(treeData));
let dfsStackResult = traverTreeDFS(dfsTree, DEPTH_TYPE.STACK);
result = dfsStackResult.map(d => d.key);
console.log('深度优先遍历结果  栈：', result.reverse()); // 深度优先遍历结果  栈： [ 'D', 'I', 'E', 'B', 'F', 'G', 'H', 'C', 'A' ]

console.log('*******************************广度优先遍历*****************************');
/**
 * 广度优先遍历，按照树的层级，一层一层向下遍历，利用队列结构，遍历数据信息
 * 遍历结果：'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'
 * */
const traverTreeBFS = (tree) => {
  const BFSearchResult = [];

  const callback = (node) => {
    BFSearchResult.push(node);
  }

  const hasChild = (node) => {
    return Array.isArray(node.children);
  }
  // 采用队列 FIFO
  const traverBFS = (treeSource, cb) => {
    const hasChildNodes = treeSource;

    while(hasChildNodes.length > 0) {
      const node = hasChildNodes.shift();
      cb(node);
      if (hasChild(node)) {
        node.children.forEach(d => {
          hasChildNodes.push(d);
        });
      }
    }
  }

  traverBFS(tree, callback);
  return BFSearchResult;
}

var bfsTree = JSON.parse(JSON.stringify(treeData));
const bfsResult = traverTreeBFS(treeData);
result = bfsResult.map(d => d.key);
console.log('广度优先遍历结果：', result); // 广度优先遍历结果： [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ]


console.log('*******************************搜索树*****************************');
