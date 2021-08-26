// 数组组装
let source = [
  {code: 100, name: '层级1',parentCode: 0},
  {code: 100100, name: '层级11',parentCode: 100},
  {code: 100100100, name: '层级111',parentCode: 100100},
  {code: 200, name: '层级2',parentCode: 0},
  {code: 200100, name: '层级22',parentCode: 200},
  {code: 300, name: '层级3',parentCode: 0},
  {code: 300100, name: '层级33',parentCode: 300},
  {code: 300100100, name: '层级333',parentCode: 300100}
]

const generatorArrayTree = (source) => {
  return source.filter((item, index, array) => {
    const parent = array.find(d => item.parentCode === d.code)
    if (parent) {
      if (Array.isArray(parent.children)) {
        parent.children.push(item)
      } else {
        parent.children = [item]
      }
      return false
    } else {
      return true
    }
  })
}

let result = source.filter((item, index, array) => {
  const parent = array.find(d => item.parentCode === d.code)
  if (parent) {
   if (Array.isArray(parent.children)) {
     parent.children.push(item)
   } else {
     parent.children = [item]
   }
   return false
  } else {
    return true
  }
})

console.log('result:', JSON.stringify(result, null, 2))

// 数组排序
source = [
  { name: 'tom', age: 32 },
  {name: 'white',age: 28},
  {name: 'jack',age: 12},
  {name: 'nick',age: 41}
  ]

const sortByField = (source, field) => {
  return source.sort((a, b) => a[field] - b[field])
}

result = sortByField(source, 'age')

console.log('sortByField result:', result)


// 字符串查找
source = 'lkasuohwhlasihilsbnbalsswejbcasl'

const findCharCount = (str) => {
  const calcObj = {}
  str.split('').map(c => {
    if (calcObj[c]) {
      calcObj[c] ++
    } else {
      calcObj[c] = 1
    }
  })
  return Object.keys(calcObj).reduce((buff, key) => {
    if (calcObj[key] > 1) {
      buff.push({
        char: key,
        count: calcObj[key]
      })
    }
    return buff
  }, [])
}

result = findCharCount(source)
console.log('findCharCount result:', result)