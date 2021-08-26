// 日志上报


// 前置装饰器：可以切入任意的非业务代码
function before(beforeFn = function() {}) {
  return function (target, name, descriptor)  {
    const value = descriptor.value

    descriptor.value = function () {
      // console.log('before descriptor:', this.id, this.page)
      beforeFn.apply(this, arguments)
      return value.apply(this, arguments)
    }

    return descriptor
  }
}

// 后置装饰器
function after (afterFn = function () {}) {
  return function (target, name, descriptor) {
    const value = descriptor.value

    descriptor.value = function () {
      // console.log('after descriptor:', this.id, this.page)
      value.apply(this, arguments)
      afterFn.apply(this, arguments)
    }

    return descriptor
  }
}

const logReport = (target, name, descriptor) => {
  const value = descriptor.value

  descriptor.value = function () {
    console.log('logReport:', this.id, this.page)
    return value.apply(arguments)
  }

  return descriptor
}

class Dialog {
  constructor() {
    this.id = 123450
    this.page = '/dialog'
    this.visible = false
  }

  @before(function() {
    console.log('before:', 1, this.visible)
  })
  @logReport
  @after(function() {
    console.log('after:', 1, this.visible)
  })
  open () {
    this.visible = true
    console.log('Dialog open:', 2)
  }

  close () {
    this.visible = false
    console.log('Dialog close')
  }
}

// 模拟按钮点击事件
new Dialog().open()
