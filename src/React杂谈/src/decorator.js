/**
 * 修饰器（Decorator）是一个函数，用来修改类的行为。
 *
 * */

function  testable(target) {
  target.isTestable = true;
}

@testable
class MyTestTable {}

console.log(MyTestTable.isTestable);
