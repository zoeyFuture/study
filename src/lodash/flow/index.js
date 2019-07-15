const lodash = require('lodash');

function square(n) {
  return n * n;
}

// compose
var result = lodash.flow(lodash.add, square)(1, 2);
console.log(result);
// square(add((1, 2)))

function DragSource(...params1) {
  console.log('DragSource:', params1);
  return (...params) => {
    console.log('DragSource - params:', params);
    return '张三';
  }
}

function DropTarget(...params2) {
  console.log('DropTarget:', params2);
  return (...params) => {
    console.log('DropTarget - params:', params);
    return '李四';
  }
}

var result = lodash.flow(
  DragSource('张三', 29),

  DropTarget('李四', 30),
  ); // (1, 2);
console.log('result:', result);

// export default flow(
//   result1: DragSource(Types.CARD,CardSource,collect),
//   result2: DropTarget(Types.CARD,CardTarget,collect1)
// )(PersonalCard)

//  result2(result1(PersonalCard))
