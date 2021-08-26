## Iterator 和 for...of 循环

只要某个数据结构部署了 Iterator 接口，

就可以对它使用扩展运算符，将其转为数组。

一个数据结构只要部署了Symbol.iterator属性，

就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。

也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。

for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对

象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，

以及字符串。