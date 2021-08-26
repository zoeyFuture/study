const createPromise = (status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve('fulfilled')
      }
      reject('rejected')
    }, 2000)
  })
}

Promise.race([
  createPromise(),
  createPromise(),
  // catchPromise,
  // thenPromise
]).then((res) => {
  // Promise.all then 等待虽有的 Promise 实例 fulfilled 状态时调用。参数时数组
  console.log('Promise.race fulfilled:', res)
}).catch((res) => {
  // Promise.all catch 只接收第一个 Promise 实例 rejected
  console.log('Promise.race rejected:', res)
}).finally(() => {
  console.log('Promise.race completed')
})
