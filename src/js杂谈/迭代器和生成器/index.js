// 假设一个非常长的字符串想要以空格为分隔,如果使用字符串split方法,那么要处理整个字符串,
// 会占用很多内存来保存返回的数组和其中的字符串.
// 使用懒惰迭代,则不必全部保存在内存
function words(s) {
  let r = /\s+|$/g
  r.lastIndex = s.match(/[^ ]/).index
  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      let start = r.lastIndex
      console.log('next:', start)
      if (start < s.length) {
        let match = r.exec(s)
        if (match) {
          return {
            value: s.substring(start, match.index)
          }
        }
      }
      return { done: true }
    }
  }
}
console.log([...words(" abc def ghi ")])

// 参考文章：
// [es6 迭代器和生成器] https://juejin.cn/post/6969842645417852964