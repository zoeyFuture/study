const arr = [
    'Tome', 'Jerry', 'Mark'
];
console.log('======================== forEach ===========================');
arr.forEach(value => {
  if (value === 'Jerry') {
    console.log('ready break - false ---- ');
    return false;
  }

  // if (value === 'Mark') {
  //   console.log('ready break - true ---- ');
  //   return true;
  // }

  console.log(`${value}`);
});

console.log('------------------------');

try {
  arr.forEach(value => {
    if (value === 'Jerry') {
      console.log('ready break ---- ');
      throw new Error('break');
    }

    console.log(`${value}`);
  });
} catch(err) {
    console.log('err:', err);
}

console.log('======================== for in ===========================');
const obj = {
  name: 'Tome',
  age: 10,
  desc: "我是Tome，今年20岁",
};

for (let key in obj) {
  console.log(`${key}:${obj[key]}`);
}

console.log('------------------------');

for (let key in arr) {
  console.log(`${key}:${arr[key]}`);
}

console.log('======================== for of ===========================');
// for (let value of obj) {
//   console.log(`${value}`);
// }

for (let value of arr) {
  console.log(`${value}`);
}



