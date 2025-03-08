// normal solution
export function permute(nums) {
  const res = [];

  function backtrack(nums, path, res) {
    if (nums.length === 0) {
      res.push(path);
      return;
    }

    for (num of nums) {
      backtrack(
        nums.filter((n) => n !== num),
        path.concat(num),
        res,
      );
    }
  }
  backtrack(nums, [], res);
  return res;
}

// native js single line solution
export function permute2(nums) {
  return nums.length === 0
    ? [[]]
    : nums.flatMap((num) =>
        permute2(nums.filter((n) => n !== num)).map((resNums) => [
          num,
          ...resNums,
        ]),
      );
}
