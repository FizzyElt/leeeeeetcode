/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function longestIdealString(s, k) {
  const dp = new Array(27).fill(0);
  const n = s.length;

  for (let i = n - 1; i >= 0; i--) {
    const cc = s.charAt(i);
    const idx = cc.charCodeAt(0) - 'a'.charCodeAt(0);
    let maxi = Number.MIN_SAFE_INTEGER;

    const left = Math.max(idx - k, 0);
    const right = Math.min(idx + k, 26);

    for (let j = left; j <= right; j++) {
      maxi = Math.max(maxi, dp[j]);
    }

    dp[idx] = maxi + 1;
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < 27; i++) {
    if (dp[i] > max) max = dp[i];
  }

  return max;
}
