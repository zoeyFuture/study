// https://juejin.cn/post/6844903426980053006
// 构建 npx babel index.js --out-file babel-index.js

// 简单AOP实现

/**
 * 装饰器模式的简单实现：es6+ 之前，通常通过
 * Function.prototype.before 做前置装饰，
 * Function.prototype.after 做后置装饰
 * **/
Function.prototype.before = function (action) {
  var func = this
  return function (){
    action.apply(this, arguments)
    return func.apply(this, arguments)
  }
}

Function.prototype.after = function (action) {
  var func = this
  return function (){
    const result = func.apply(this, arguments)
    action.apply(this, arguments)
    return result
  }
}

var foo = function () {
  console.log(2)
}

foo = foo
  .before(function () {
    console.log(1)
  })
  .after(function () {
    console.log(3)
  })

// foo()

/**
 * es7 中引入装饰器（Decorator）概念，提供了对
 * JavaScript 的类和类里面的方法就行装饰的能力
 * **/

function mixins (...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

function log (target, name, descriptor /* 描述符 */) {
  // 保存原来的值
  const value = descriptor.value

  // 添加钩子
  descriptor.value = function () {
    console.log('before')
    // 调用原来的值
    value()
    console.log('after')
  }
  return descriptor
}

function connect (beforeFn, afterFn) {
  return function (target /* 原生对象 */, name /* 调用的方法名称 */, descriptor /* 描述符 */) {
    /**
     * descriptor 是调用方法的描述符，结构如下：
     * {
        value: [Function: log], - log 这里是个函数
        writable: true,
        enumerable: false,
        configurable: true
      }
     * */
    // 保存原有的值
    const value = descriptor.value // 获取原函数，

    // 重新定义函数，并添加上自定义的逻辑
    descriptor.value = () => {
      beforeFn && beforeFn()
      value()
      afterFn && afterFn()
    }
    return descriptor
  }
}

class LogComponent {
  @connect(() => {
    console.log('before:', 1)
  }, () => {
    console.log('after:', 3)
  })
  log() {
    console.log(2)
  }
}
const logComponent = new LogComponent()
logComponent.log()
