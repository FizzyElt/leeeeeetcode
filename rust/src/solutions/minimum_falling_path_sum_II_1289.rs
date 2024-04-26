pub fn min_falling_path_sum(grid: Vec<Vec<i32>>) -> i32 {
    if grid.len() == 1 {
        return grid[0][0];
    }

    let mut dp = grid[0].clone();
    let mut next_dp = vec![0; dp.len()];

    for row_idx in 1..grid.len() {
        let row = &grid[row_idx];

        for (i, n) in row.iter().enumerate() {
            let mut min_num = i32::MAX;

            for j in 0..dp.len() {
                if i == j {
                    continue;
                }
                let k = dp[j];
                let sum = n + k;
                if sum < min_num {
                    min_num = sum;
                }
            }

            next_dp[i] = min_num;
        }

        dp = next_dp.clone();
    }

    let mut min_sum = i32::MAX;
    for n in dp {
        if n < min_sum {
            min_sum = n;
        }
    }

    min_sum
}
