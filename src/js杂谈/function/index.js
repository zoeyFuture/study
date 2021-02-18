const str = `(name) => {
  console.log('name:', name)
}`

const func = new Function('name', 'console.log("name:", name)')
console.log('func:', func)
func('张三')
const func1 = eval(str)
func1('李四')
