/**
 * 宏任务与微任务：
 *  macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
 *  micro-task(微任务)：Promise，process.nextTick
 * * */
console.log('task: 1');

// macro task
setTimeout(() => {
  console.log('task: 2');
});

function asyncFunc() {
  console.log('task: 4');
  setTimeout(() => {
    console.log('task: 5');
  });
}

new Promise((resolve) => {
  console.log('task: 6');
  asyncFunc();
  resolve();
  console.log('task: 7');
})
// micro task
  .then(() => {
    console.log('task: 8');

    setTimeout(() => {
      console.log('setTimeout');
    });

    // ************
    new Promise((resolve) => {
      resolve();
    }).then(() => {
      console.log('task: 21')
    });

    // ************
    process.nextTick(() => {
      console.log('task: 22');
    });

  });

// micro task
process.nextTick(() => {
  console.log('task: 3');
});

console.log('task: 9');

// Q.js  浏览器实现
