/** 回朔算法  **/


// 针对N叉树的递归回溯方法
// function backtrack(t)
// {
//   if ( t > n ) {
//     output(x); //叶子节点，输出结果，x是可行解
//   }
//
//   else {
//     for(let value of k) { // 当前节点的所有子节点
//      获取子节点的值
//       //满足约束条件和限界条件
//       if (constraint(t) && bound(t))  {
//         backtrack(t+1);  //递归下一层
//       }
//     }
//   }
// }


// 查重叶子结点，以及父节点
// const searchKey = '结点131';
const searchKey = 121;
const tree = [{
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
    }, ],
}, ];

// 遍历叶子结点
const isLeaf = (node, key = searchKey) => {
    if (node.id === searchKey) {
        return true;
    }
    return false;
}

// 递归回朔
const back = (node, callback) => {
    if (!Array.isArray(node.children)) {
        // 匹配叶子结点
        return isLeaf(node);
    } else {
        let result = false;
        node.children.forEach(d => {
            const res = back(d, callback);
            if (res) {
                callback(d);
            }
            result = result || res;
        });
        return result;
    }
}

//针对N叉树的迭代回溯方法
const iterativeBacktrack = (node, callback) => {
    let t = node;
    let key = searchKey;
    while (t.length > 0) {
        const temp = t.shift();
        if (Array.isArray(temp.children)) {
            temp.children.forEach((d) => {
                if (isLeaf(d, key)) {
                    key = temp.id;
                    callback(d);
                } else {
                    t.push(d);
                }
            });
        } else {
            t.pop();
        }
    }
}

console.time()
    // 匹配结点处理
const callback = (node) => {
    console.log('匹配路径：', node.id);
}

console.log('回朔算法递归实现：');
tree.forEach(d => {
    back(d, callback);
});

console.log('回朔算法递推实现：');
iterativeBacktrack(tree, callback);

console.timeEnd()