// AOP 实现防抖与节流

function debounce (interval = 200) {
  return function (target, name, descriptor) {
    const value = descriptor.value
    let timeout

    descriptor.value = function () {
      if (timeout !== null) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        value.apply(this, arguments)
      }, interval)
    }

    return descriptor
  }
}

function throttle (delay = 200) {
  return function (target, name, descriptor) {
    const value = descriptor.value
    let prev = Date.now()

    descriptor.value = function () {
      const next = Date.now()
      if (next - prev >= delay) {
        value.apply(this, arguments)
        prev = Date.now()
      }
    }

    return descriptor
  }
}

class Dialog {
  @debounce()
  input (params) {
    console.log('input: ', Date.now(), params)
  }

  @throttle(2000)
  scroll (params) {
    console.log('scroll: ', Date.now(), params)
  }

  start () {
    for (let i = 0; i< 1000_0000; i ++) {
      this.input(i.toString().padStart(7, '0'))
      this.scroll(i.toString().padStart(7, '0'))
    }
  }
}

new Dialog().start()
