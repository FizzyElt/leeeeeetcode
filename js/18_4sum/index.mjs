export function fourSum(nums, target) {
  if (nums.length < 4) return [];

  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3 ; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum > target) {
          right -= 1;
        } else if (sum < target) {
          left += 1;
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) {
            left += 1;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right -= 1;
          }
          left += 1;
          right -= 1;
        }
      }
    }
  }
  return res;
}
