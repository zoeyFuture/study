const createPromise = (status) => {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve('fulfilled')
    }
    reject('rejected')
  })
}

const thenPromise = createPromise(true).then(res => {
  console.log('fulfilled:', res)
  return 'proxy fulfilled' // then 返回值作为新的 promise 实例 的 fulfilled 状态值
})
const catchPromise = createPromise().catch(res => {
  console.log('rejected:', res)
  return 'proxy rejected' // 如果有返回，则返回一个新的 Promise，如果没有返回则 Promise 状态结束，rejected 状态不续传
})

Promise.all([
  createPromise(true),
  createPromise(true),
  catchPromise,
  // thenPromise
]).then((res) => {
  // Promise.all then 等待虽有的 Promise 实例 fulfilled 状态时调用。参数时数组
  console.log('Promise.all fulfilled:', res)
}).catch((res) => {
  // Promise.all catch 只接收第一个 Promise 实例 rejected
  console.log('Promise.all rejected:', res)
}).finally(() => {
  console.log('Promise.all completed')
})

// 注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。