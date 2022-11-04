export function checkArithmeticSubarrays(nums, l, r) {
  const m = l.length;
  let res = new Array(l.length).fill(false);
  for (let i = 0; i < m; i++) {
    const start = l[i];
    const end = r[i];

    const subArr = nums.slice(start, end + 1).sort((a, b) => a - b);
    res[i] = isArithmetic(subArr);
  }

  return res;
}

function isArithmetic(nums) {
  const diff = nums[1] - nums[0];

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] !== diff) {
      return false;
    }
  }

  return true;
}
