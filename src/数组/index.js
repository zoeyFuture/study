const arr1 = [1, 2, 3, 4];

const arr2 = arr1.filter(d => d === 2);
console.log(arr2);

const arr3 = [].concat(arr1)
console.log('arr3:', [].concat(arr1));
console.log('arr3:', ([].push(...arr1)));


