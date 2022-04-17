struct NumMatrix {
    prefix: Vec<Vec<i32>>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumMatrix {
    fn new(matrix: Vec<Vec<i32>>) -> Self {
        let n_rows = matrix.len();
        let n_cols = matrix[0].len();

        let mut prefix = vec![vec![0; n_cols + 1]; n_rows + 1];

        for i in 0..n_rows {
            for j in 0..n_cols {
                prefix[i + 1][j + 1] =
                    matrix[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
            }
        }

        Self { prefix }
    }

    fn sum_region(&self, row1: i32, col1: i32, row2: i32, col2: i32) -> i32 {
        let row1 = row1 as usize;
        let col1 = col1 as usize;
        let row2 = row2 as usize;
        let col2 = col2 as usize;
        
        self.prefix[row2 + 1][col2 + 1] - self.prefix[row1][col2 + 1] - self.prefix[row2 + 1][col1]
            + self.prefix[row1][col1]
    }
}
