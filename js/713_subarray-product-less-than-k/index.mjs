export function numSubarrayProductLessThanK(nums, k) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  if (k <= 1) return 0;
  let start = 0;
  let product = 1;
  let count = 0;

  for (let end = 0; end < nums.length; end++) {
    product *= nums[end];
    // ensure subarray product is less than k
    while (product >= k && start <= end) {
      product /= nums[start++];
    }
    count += end - start + 1;
  }
  return count;
}
