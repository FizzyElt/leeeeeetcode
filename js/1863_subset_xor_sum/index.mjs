export function subsetXORSum(nums) {
  return nums
    .reduce((xors, num) => [...xors, ...xors.map((xor) => xor ^ num)], [0])
    .reduce((acc, num) => acc + num, 0);
}

// backtrack
export function subsetXORSum2(nums) {
  const list = [];

  function backtrack(start = 0, arr) {
    list.push(arr.reduce((acc, n) => acc ^ n, 0));
    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i]);
      backtrack(i + 1, arr);
      arr.pop();
    }
  }

  backtrack(0, []);
  return list.reduce((acc, num) => acc + num, 0);
}
