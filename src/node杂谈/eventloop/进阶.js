console.log('task: 1');

new Promise((resolve) => {
  console.log('task: 2');
  resolve();
}).then(() => {
  console.log('task: 3');
});

process.nextTick(() => {
  console.log('task: 4');
});

function asyncFunc() {
  console.log('task: 5');
}

async function testFunc() {
  console.log('task: 6');
  await asyncFunc();
  console.log('task: 7');
  process.nextTick(() => {
    console.log('task: 8');
  });
}

// generator

testFunc();
console.log('task: 9');
