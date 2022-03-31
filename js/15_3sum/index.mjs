export function threeSum(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] > 0) break;

    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if (sum < 0) {
        left += 1;
      } else if (sum > 0) {
        right -= 1;
      } else {
        res.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        while (left < right && sortedNums[left] === sortedNums[left + 1])
          left += 1;
        while (left < right && sortedNums[right] === sortedNums[right - 1])
          right -= 1;
        left += 1;
        right -= 1;
      }
    }
  }

  return res;
}
