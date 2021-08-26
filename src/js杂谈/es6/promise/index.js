const promise = new Promise((resolve, reject) => {
  reject(100)
})

promise
  .catch(res => {
    console.log('catch:', res)
    return 200
  }).then(res => {
    console.log('resolve:', res)
  }).finally(res => {
  console.log('finally:', res) // 不接受任何值
  })
