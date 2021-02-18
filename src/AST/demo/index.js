const recast = require("recast");

const code =
  `
  function add(a, b) {
    return a + b;
  }
`;

const {
  variableDeclaration, // 变量声明
  variableDeclarator, // 变量符号
  functionExpression, // 函数声明
} = recast.types.builders;

// 解析代码，生成AST树
const ast = recast.parse(code);
// console.log(JSON.stringify(ast, null, 2));

// 获取函数定义
const add  = ast.program.body[0];
// console.log(JSON.stringify(add, null, 2));

// 将准备好的组件置入墨菊，并组装回原来的ATS对象
ast.program.body[0] = variableDeclaration('const', [
  variableDeclarator(add.id, functionExpression(
    null,
    add.params,
    add.body,
  ))
]);

// 将AST对象重新转换为可阅读的代码，其实就是 recast.parse 的逆向过程
// const output = recast.print(ast).code;
const output = recast.prettyPrint(ast, { tabWidth: 2 }).code;
// console.log(JSON.stringify(output, null, 2));
console.log(output);
