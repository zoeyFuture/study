/**
 * throttle：
 *  高频事件触发，在n秒内只执行一次，所以节流会稀释函数执行频率
 * */


function throttle(fn) {
  let canRun = true;

  return function() {
    if (!canRun) {
      return;
    }

    canRun = false;
    setTimeout(() => {
      fn();
      canRun = true;
    }, 500);
  }
}
function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));
