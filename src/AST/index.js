const { tokenizeCode } = require('./tokenizeCode');
const { parse } = require('./parse');

// 词法解析过程
const tokens = tokenizeCode(`
   if (1 > 0) {
     alert("aa");
   }
`);

// console.log(tokens);

// 语法解析生成 AST 树
const ast = parse(tokens);
console.log(JSON.stringify(ast, null, 2));
