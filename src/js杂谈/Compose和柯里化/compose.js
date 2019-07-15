/**
 *
 * JS函数式编程 - 函数组合（compose）：
 *    返回函数集 functions 组合后的复合函数,也就是一个函数执行完之后把返回的结果再作为参数赋给下一个函数来执行。
 * */
const compose = function(...funs) {
  if (funs.length === 0)
    return arg => arg;

  if (funs.length === 1)
    return funs[0];

  return funs.reduce((a, b) => (...args) => (a(b(args))));
};

const pipe = function(...funs) {
  if (funs.length === 0)
    return arg => arg;

  if (funs.length === 1)
    return funs[0];

  return funs.reduce((a, b) => (...args) => (b(a(args))));
};

function fun1(store) {
  store.name = 'fun1';
  console.log('fun1:', store.name);
  return store;
}
function fun2(store) {
  store.name = 'fun2';
  console.log('fun2:', store.name);
  return store;
}
function fun3(store) {
  store.name = 'fun3';
  console.log('fun3:', store.name);
  return store;
}

const store = {
  name: 'store',
};

compose(fun1, fun2, fun3)(store);
pipe(fun1, fun2, fun3)(store);
