/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
function findRotateSteps(ring, key) {
  const indexMap = {};
  for (let i = 0; i < ring.length; i++) {
    const c = ring[i];
    if (indexMap[c]) {
      indexMap[c].push(i);
    } else {
      indexMap[c] = [i];
    }
  }
  const memo = Array.from({ length: ring.length }, (_, index) =>
    Array.from({ length: key.length }, () => -1)
  );

  const dfs = (ringI, keyI) => {
    if (keyI === key.length) {
      return 0;
    }
    if (memo[ringI][keyI] >= 0) {
      return memo[ringI][keyI];
    }
    const curLetter = key[keyI];
    let res = Number.POSITIVE_INFINITY;

    // 取該字元所有可以到的位置
    for (const targetI of indexMap[curLetter]) {
      const d1 = Math.abs(ringI - targetI);
      const d2 = ring.length - d1;

      const curMin = Math.min(d1, d2);

      res = Math.min(res, curMin + dfs(targetI, keyI + 1));
    }
    memo[ringI][keyI] = res;
    return res;
  };
  return key.length + dfs(0, 0);
}
