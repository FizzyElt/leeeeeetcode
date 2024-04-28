/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  const tokens = [...s].reduce((list, c) => {
    if (list.length === 0) {
      list.push(c);
      return list;
    }

    if (c === '*' || c === '-' || c === '+' || c === '/') {
      list.push(c);
      return list;
    }

    const poped = list.pop();

    if (poped === '*' || poped === '-' || poped === '+' || poped === '/') {
      list.push(poped, c);
    } else {
      list.push(poped + c);
    }
    return list;
  }, []);

  const stack = [Number(tokens.shift())];

  for (let i = 0; i < tokens.length - 1; i++) {
    const sign = tokens[i];
    const num = Number(tokens[i + 1]);
    if (sign === '+') {
      stack.push(num);
      continue;
    }
    if (sign === '-') {
      stack.push(num * -1);
      continue;
    }
    if (sign === '*') {
      stack.push(stack.pop() * num);
      continue;
    }
    if (sign === '/') {
      stack.push(Math.trunc(stack.pop() / num));
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

console.log(calculate('3+2*2'));
