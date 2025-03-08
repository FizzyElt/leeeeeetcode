/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
  if (s.length === 0) return 0;

  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === "0" ? 0 : 1;

  for (let i = 2; i < dp.length; i++) {
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }

    if (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6")) {
      dp[i] += dp[i - 2];
    }
  }

  return dp.at(-1);
};
