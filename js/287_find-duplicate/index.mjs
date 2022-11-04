export function findDuplicate(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return nums[i];
    set.add(nums[i]);
  }

  return 0;
}
