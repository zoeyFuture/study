/*
* debounce:
*   出发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
* */

function debounce(fn) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn();
    }, 500);
  }
}

function sayHi() {
  console.log('防抖成功');
}

inputCom.addEventListener('input', debounce(sayHi));
