import * as R from 'ramda';

// normal solution
export function permute(nums) {
  const res = [];

  function backtrack(nums, path, res) {
    if (nums.length === 0) {
      res.push(path);
      return;
    }

    nums.forEach((num) => {
      backtrack(
        nums.filter((n) => n !== num),
        path.concat(num),
        res
      );
    });
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
        ])
      );
}

// ramda single line solution
export const permute3 = (nums) => {
  return R.ifElse(
    R.propEq('length', 0),
    R.always([[]]),
    R.chain((num) =>
      permute3(R.without([num], nums)).map((resNums) => [num, ...resNums])
    )
  )(nums);
};
