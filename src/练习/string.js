let source = 'aaaabbbaaccc'
let target = '4a3b2a3c'

// source.find()

const formatStr = (source) => {
  return source.split('').reduce((buff, t, index, array) => {
    const item = index === 0 ? {
      start: 0,
      str: t,
      count: 1
    } : buff.pop()

    if (index === 0) {
      buff.push(item)
    }

    console.log('item:', index, array[index + 1], t, item)
    if (array[index + 1] === t) {
      item.count ++
    } else {
      const newItem = {
        start: index + 1,
        str: array[index + 1],
        count: 1,
      }
      buff.push(newItem)
    }
    return buff
  }, [])
}

console.log('result:', formatStr(source))
