function dailyTemperatures(temperatures) {
  const stack = [];
  const res = new Array(temperatures.length).fill(0);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length !== 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }

    res[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;

    stack.push(i);
  }

  return res;
}
