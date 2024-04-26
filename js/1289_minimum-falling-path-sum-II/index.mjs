/**
 * @param {number[][]} grid
 * @return {number}
 */
function minFallingPathSum(grid) {
  if (grid.length === 1) {
    return grid[0][0];
  }

  let dp = Array.from({ length: grid[0].length }, (_, index) => grid[0][index]);

  for (let rowIdx = 1; rowIdx < grid.length; rowIdx++) {
    const row = grid[rowIdx];
    const nextDp = [];
    for (let i = 0; i < row.length; i++) {
      const n = row[i];
      let min = Number.MAX_SAFE_INTEGER;

      for (let j = 0; j < dp.length; j++) {
        if (j === i) continue;

        const k = dp[j];
        const sum = k + n;

        if (sum < min) {
          min = sum;
        }
      }

      nextDp.push(min);
    }

    dp = nextDp;
  }

  return Math.min(...dp);
}
