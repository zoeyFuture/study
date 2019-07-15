/***
 * AST解析过程 - 词法解析：
 *  拆分
 * */
function tokenizeCode(code) {
  const tokens = [];  // 保存结果数组

  for (let i = 0; i < code.length; i += 1) {
    let value = code.charAt(i);

    if (value === ';') {
      tokens.push({
        type: 'sep',
        value,
      });
      continue;
    }

    if (value === '(' || value === ')') {
      tokens.push({
        type: 'parens',
        value,
      });
      continue;
    }

    if (value === '{' || value === '}') {
      tokens.push({
        type: 'brace',
        value,
      });
      continue;
    }

    if (value === '>' || value === '<') {
      tokens.push({
        type: 'operator',
        value,
      });
      continue;
    }

    if (value === '"' || value === '\'') {
      // 如果是单引号或双引号，表示一个字符的开始
      const token = {
        type: 'string',
        value,
      };

      tokens.push(token);

      let closer = value;

      // 表示下一个字符是不是被转译了
      let escaped = false;

      // 循环遍历 寻找字符串的末尾
      for(i++; i < code.length; i++) {
        value = code.charAt(i);
        token.value += value;
        if (escaped) {
          escaped = false;
        } else if (value === '\\') {
          // 如果当前的字符是 \, 将转译状态变为true，下一个字符不会被做处理
          escaped = true;
        } else if (value === closer) {
          break;
        }
      }
      continue;
    }

    // 数字做处理
    if (/[0-9]/.test(value)) {
      const token = {
        type: 'number',
        value,
      };
      tokens.push(token);

      // 继续遍历，如果下一个字符还是数字的话，比如0到9或小数点的话
      for (i++; i < code.length; i++) {
        value = code.charAt(i);
        if (/[0-9\.]/.test(value)) {
          token.value += value;
        } else {
          // 如果下一个字符不是数字的话，需要把i值返回原来的位置上，需要减1
          i--;
          break;
        }
      }
      continue;
    }

    // 标识符是以字母，$, _开始的 做判断
    if (/[a-zA-Z\$\_]/.test(value)) {
      const token = {
        type: 'identifier',
        value,
      };
      tokens.push(token);
      // 继续遍历下一个字符，如果下一个字符还是以字母，$,_开始的话
      for (i++; i < code.length; i++) {
        value = code.charAt(i);
        if (/[a-zA-Z0-9\$\_]/.test(value)) {
          token.value += value;
        } else {
          i--;
          break;
        }
      }
      continue;
    }

    // 连续的空白字符组合在一起
    if (/\s/.test(value)) {
      const token = {
        type: 'whitespace',
        value,
      };
      tokens.push(token);
      // 继续遍历下一个字符
      for (i++; i < code.length; i++) {
        value = code.charAt(i);
        if (/\s/.test(value)) {
          token.value += value;
        } else {
          i--;
          break;
        }
      }
      continue;
    }

    // 其他，遇到无法理解的字符 直接抛出异常
    throw new Error('Unexpected ' + currentChar);
  }
  return tokens;
}

exports.tokenizeCode = tokenizeCode;
