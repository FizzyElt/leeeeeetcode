function smallestRangeII(nums, k) {
  const arr = nums.sort(function any(a, b) {
    return a - b;
  });

  const len = arr.length;

  const lowest = arr[0];
  const highest = arr[len - 1];

  let res = highest - lowest;

  for (let i = 0; i < len - 1; i++) {
    const min = Math.min(lowest + k, arr[i + 1] - k);
    const max = Math.max(highest - k, arr[i] + k);

    res = Math.min(max - min, res);
  }

  return res;
}
