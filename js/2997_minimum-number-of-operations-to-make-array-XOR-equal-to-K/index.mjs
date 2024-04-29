/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
  const result = nums.reduce((a, b) => a ^ b, 0);

  let diff = result ^ k;

  let diffCount = 0;

  while (diff) {
    const a = diff % 2;
    diffCount += a;
    diff = diff >> 1;
  }

  return diffCount;
}
