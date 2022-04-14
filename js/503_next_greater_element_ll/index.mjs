function nextGreaterElements(nums) {
  const len = nums.length;
  const stack = Array.from(
    { length: len },
    (_, index) => nums[len - index - 1]
  );

  let res = new Array(len).fill(-1);

  for (let i = len - 1; i >= 0; i--) {
    while (stack.length !== 0 && nums[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    res[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(nums[i]);
  }

  return res;
}
