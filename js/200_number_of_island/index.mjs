function numIslands(grid) {
  const visit = grid.map((row) => row.map((col) => false));
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  grid.forEach((row, i) => {
    row.forEach((c, j) => {
      if (c === '1' && !visit[i][j]) {
        count += 1;
        dfs(i, j);
      }
    });
  });

  function dfs(x, y) {
    if (grid[x][y] === '0') {
      return;
    }

    visit[x][y] = true;

    if (y + 1 < cols && !visit[x][y + 1]) {
      dfs(x, y + 1);
    }

    if (y - 1 >= 0 && !visit[x][y - 1]) {
      dfs(x, y - 1);
    }

    if (x + 1 < rows && !visit[x + 1][y]) {
      dfs(x + 1, y);
    }

    if (x - 1 >= 0 && !visit[x - 1][y]) {
      dfs(x - 1, y);
    }
  }

  return count;
}
