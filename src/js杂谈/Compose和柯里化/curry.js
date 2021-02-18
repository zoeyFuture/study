
/*
* JS函数式编程 - 柯里化:
*   柯里化是这样的一个转换过程，把接受多个参数的函数变换成接受一个单一参数的函数，
*   如果其他的参数是必要的，返回接受余下的参数且返回结果的新函数。可以认为是高阶函数
*
* */

const add1 = function(a,b ,c, d) {
  return a + b + c + d;
}

console.log(add1(1, 2, 3, 4));

// demo1
const add2 = a => b => c => d => a + b + c + d;
console.log(add2(1)(2)(3)(4));

// const curry = require('lodash').curry;
