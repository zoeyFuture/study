const arr1 = [1, 2, [3, 4, [5, 6, [7, 8]]]]

// flat(depth)

// depth 默认为1
console.log(arr1.flat())
console.log(arr1.flat(2))
console.log(arr1.flat(Infinity))

