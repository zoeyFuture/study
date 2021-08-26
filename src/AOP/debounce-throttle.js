// AOP 实现防抖与节流

// 防抖
function debounce (fn, wait = 200) {
  let timeout = null
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

function throttle (func, delay = 200) {
  let prev = Date.now()
  return function () {
    const now = Date.now()
    if (now - prev >= delay) {
      func.apply(this, arguments)
      prev = Date.now()
    }
  }
}

const handleLog = (i) => {
  console.log('log:', i)
}

const debounceLog = debounce(handleLog, 200)
const throttleLog = throttle(handleLog, 200)

for(let i=0; i< 1000_0000; i++) {
  // console.log(i)
  // debounceLog(i) // 防抖
  throttleLog(i) // 节流

}
