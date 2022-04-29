pub fn num_islands(grid: Vec<Vec<char>>) -> i32 {
    let rows = grid.len();
    let cols = grid[0].len();
    let mut visit = vec![vec![false; cols]; rows];

    let mut count = 0;

    for (i, row) in grid.iter().enumerate() {
        for (j, col) in row.iter().enumerate() {
            if *col == '1' && !visit[i][j] {
                count += 1;
                dfs(i, j, &mut visit, &grid);
            }
        }
    }

    count
}

fn dfs(x: usize, y: usize, visit: &mut Vec<Vec<bool>>, grid: &Vec<Vec<char>>) {
    if grid[x][y] == '0' {
        return;
    }

    let rows = grid.len();
    let cols = grid[0].len();

    visit[x][y] = true;

    if y + 1 < cols && !visit[x][y + 1] {
        dfs(x, y + 1, visit, grid);
    }
    if y >= 1 && !visit[x][y - 1] {
        dfs(x, y - 1, visit, grid);
    }
    if x + 1 < rows && !visit[x + 1][y] {
        dfs(x + 1, y, visit, grid);
    }
    if x >= 1 && !visit[x - 1][y] {
        dfs(x - 1, y, visit, grid);
    }
}
