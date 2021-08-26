
// Promise
//
let p1 = new Promise((resolve, reject)=> {
  resolve( 'success')
  // reject('failed')
}).then(res => {
  console.log('then:', res)
})
  .catch(error => {
    console.log('catch:', error)
  })
  .finally(() => {
    console.log('finally:')
  })

class MyPromise {
  status = 'pending'
  result
  error
  constructor(callback) {
    callback(this.resolve, this.reject)
  }

  resolve = (_result) => {
    this.status = 'fulfilled'
    this.result =  _result
  }

  reject = (_error) => {
    this.status = 'rejected'
    this.error = _error
  }

  then(callback) {
    if (this.status === 'fulfilled') {
      this.result = callback(this.result)
    }
    return this
  }

  catch (callback) {
    if (this.status === 'rejected') {
       this.result = callback(this.error)
    }
    return this
  }

  finally(callback) {
    callback()
  }
}

let p2 = new MyPromise((resolve, reject) => {
  // resolve('success')
  reject('failed')
})
  .then(res => {
  console.log('MyPromise then:', res)
}).then(res => {
    console.log('MyPromise then:', res)
  })
  .catch(error => {
    console.log('MyPromise catch:', error)
}).finally(() => {
      console.log('finally')
  })

// console.log('p2:', p2)
