遍历数组：
    1、for
    2、Array.forEach
    3、for in/of

比较：
1、Array.forEach
   跳出循环：
    throw new Error();

   continue 问题;

2、 for in
  es5标准，用于遍历 key
  适用对象：
    对象，数组，类似数组但并非数组（参数列表对象arguments  getElementsBy* 返回值）

3、for of
  es6标准，遍历value
  适用对象：
    数组，类似数组但并非数组（参数列表对象arguments  getElementsBy* 返回值）

 推荐：
    遍历对象使用 for in，遍历数组使用 for of
