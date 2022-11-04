function combinationSum2(candidates, target) {
  const sortedCandidates = candidates.sort((a, b) => a - b);

  const res = [];

  function dfs(curr, sum, arr) {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      res.push([...curr]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || arr[i] !== arr[i - 1]) {
        curr.push(arr[i]);
        dfs(curr, sum + arr[i], arr.slice(i + 1));
        curr.pop();
      }
    }
  }

  dfs([], 0, sortedCandidates);

  return res;
}
