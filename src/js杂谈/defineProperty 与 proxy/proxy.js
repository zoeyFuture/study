
// 原始对象
const obj = {
  _prop: 'foo',
  prop: 'foo',
};

/**
 * Proxy 代理对象
 * */
const proxyObj = new Proxy({}, {
  get: (obj, prop) => {
    console.log('设置 get 操作');
    // return obj[prop];
    return Reflect.get(obj, prop)
  },

  set: (obj, prop, value) => {
    console.log('设置 set 操作');
    obj[prop] = value;
    return Reflect.set(obj, prop, value);
  },

  // 拦截 in 运算法，来隐藏某些属性
  has: (obj, key) => {
    if (key.startWith('_')) {
      return false;
    }
    // return key in obj;
    return Reflect.has(obj, key);
  }
});

proxyObj.now = 123456;
console.log(proxyObj.now);
