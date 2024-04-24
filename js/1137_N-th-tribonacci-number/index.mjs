/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
  const dp = [0, 1, 1];

  if (n < 3) {
    return dp[n];
  }

  for (let i = 3; i <= n; i++) {
    const n1 = dp[i - 1];
    const n2 = dp[i - 2];
    const n3 = dp[i - 3];

    dp.push(n1 + n2 + n3);
  }

  return dp[dp.length - 1];
}
