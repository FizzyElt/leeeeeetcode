function minSubArrayLen(target, nums) {
  let sum = 0;
  let right = -1;
  let left = 0;
  let minLen = nums.length;

  while (right < nums.length) {
    if (sum < target) {
      right += 1;
      sum += nums[right];
      continue;
    }

    minLen = Math.min(right - left, minLen);

    sum -= nums[left];
    left += 1;
  }

  return minLen === nums.length ? 0 : minLen + 1;
}
