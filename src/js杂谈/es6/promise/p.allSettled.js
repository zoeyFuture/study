const createPromise = (status) => {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve('fulfilled')
    }
    reject('rejected')
  })
}
// 注意：Promise.allSettled 状态返回的总是 fulfilled 状态，不会是 rejected 状态，返回的是数组，每项里面会包含输入的 Promise 的状态的值

// 当不关系异步操作结果，而只关系有没有结束就可以使用 Promise.allSettled

Promise.allSettled([
  createPromise(true),
  createPromise(true),
  createPromise(),
  createPromise(),
]).then((res) => {
  // Promise.allSettled then 返回数组
  console.log('Promise.allSettled fulfilled:', res)
  /**
   Promise.allSettled fulfilled: [
   { status: 'fulfilled', value: 'fulfilled' }, // fulfilled 状态，有 value 字段
   { status: 'fulfilled', value: 'fulfilled' },
   { status: 'rejected', reason: 'rejected' }, // rejected 状态，有 reason 字段
   { status: 'rejected', reason: 'rejected' }

   * */
}).catch((res) => {
  // Promise.allSettled catch 返回数组
  console.log('Promise.allSettled rejected:', res)
}).finally(() => {
  console.log('Promise.allSettled completed')
})
