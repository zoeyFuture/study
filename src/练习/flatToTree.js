let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]

// 复杂度：O(n^2)
const flatToTree = (arr) => {
  return arr.filter((item, index, array) => {
    const parent = array.find(d => d.id === item.pid)
    if (parent) {
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(item)
      return false
    }
    return true
  })
}

// 列表结构转换为树结构，就是把所有非跟节点放到对应父节点的children数组中，然后把跟节点提取出来
const listToTree = (list) => {
  const info = list.reduce()
}

console.log('flatToTree:', JSON.stringify(flatToTree(arr), null, 2))
