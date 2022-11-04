function isMonotonic(nums) {
  if (nums.length < 3) {
    return true;
  }

  let initMonotone = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const monotone = (() => {
      if (nums[i] > nums[i + 1]) {
        return 1;
      }
      if (nums[i] < nums[i + 1]) {
        return -1;
      }
      return 0;
    })();

    if (initMonotone !== 0 && monotone !== 0 && monotone !== initMonotone) {
      return false;
    }

    if (initMonotone === 0) {
      initMonotone = monotone;
    }
  }

  return true;
}
