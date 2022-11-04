function largestPerimeter(nums) {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      return nums[i + 1] + nums[i + 2] + nums[i];
    }
  }

  return 0;
}
