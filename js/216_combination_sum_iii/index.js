/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];

  function dfs(currArr, startIndex, remainNumber) {
    if (currArr.length === k) {
      if (remainNumber === 0) res.push([...currArr]);
      return;
    }

    for (let i = startIndex; i <= Math.min(remainNumber, 9); i++) {
      currArr.push(i);
      dfs(currArr, i + 1, remainNumber - i);
      currArr.pop();
    }
  }

  dfs([], 1, n);

  return res;
};
// @lc code=end
