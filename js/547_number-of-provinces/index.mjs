function findCircleNum(isConnected) {
  const n = isConnected.length;
  const visit = new Array(n).fill(false);

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      count += 1;
      dfs(i);
    }
  }

  function dfs(n) {
    if (visit[n]) {
      return;
    }

    visit[n] = true;

    isConnected[n].forEach((c, index) => {
      if (index !== n && c === 1) {
        dfs(index);
      }
    });
  }

  return count;
}
