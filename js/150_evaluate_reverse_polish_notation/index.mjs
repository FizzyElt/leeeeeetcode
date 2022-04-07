function evalRPN(tokens) {
  const operators = ['+', '-', '*', '/'];

  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (!operators.includes(tokens[i])) {
      stack.push(parseInt(tokens[i]));
      continue;
    }

    const operator = tokens[i];
    const rightNumber = stack.pop();
    const leftNumber = stack.pop();

    switch (operator) {
      case '+':
        stack.push(leftNumber + rightNumber);
        break;
      case '-':
        stack.push(leftNumber - rightNumber);
        break;
      case '*':
        stack.push(leftNumber * rightNumber);
        break;
      case '/':
        stack.push(parseInt(leftNumber / rightNumber));
        break;
    }
  }

  return stack[0];
}
