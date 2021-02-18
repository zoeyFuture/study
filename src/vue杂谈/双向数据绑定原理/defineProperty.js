/**
 * Object.defineProperty(obj, prop, descriptor)
 *
 * 在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
 *
 * */
/**
 * 配置对象属性为"可观测"
 * */
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    // 配置属性描述符

    // - 数据描述符
    enumerable: true, // true 配置可枚举
    configurable: true, // true 表示该属性可被修改，被删除

    // 存取描述符
    get: function() {
      return val;
    },
    set: function(_val) {
      val = _val;
      console.log(`属性 ${key} 已被修改，新值：${val}`);
    }
  });
}


