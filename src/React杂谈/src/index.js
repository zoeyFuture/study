function connect(props) {
  const keys = Object.keys(props);

  console.log('props:', props);
  let params = {};
  keys.forEach((key) => {
    params[key] = props[key];
  });
  console.log('params:', params);

  return target => {
    keys.forEach((key) => {
      target[key] = props[key];
    });
  }
}

//注意这里，隐形传入了Class，语法类似于testable(true)(MyTestableClass)
@connect({ key: 1, fname: '张三', isTestable: true })
class MyTestableClass {}
console.log(MyTestableClass.isTestable); // true

@connect({ key: 1, fname: '张三', isTestable: true })
class MyClass {}
console.log(MyClass.key, MyClass.fname); // false


function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
