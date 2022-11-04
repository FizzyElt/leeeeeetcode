/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absentCount = 0;
  let lateCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      absentCount++;
      if (absentCount === 2) return false;
    }

    if (s[i] === 'L') {
      lateCount++;
      if (lateCount === 3) return false;
    } else {
      lateCount = 0;
    }
  }

  return true;
};
// @lc code=end
