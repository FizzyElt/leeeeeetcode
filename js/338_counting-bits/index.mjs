function countBits(n) {
  const dp = [0];
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) {
      offset *= 2;
    }
    dp.push(dp[i - offset] + 1);
  }

  return dp;
}
