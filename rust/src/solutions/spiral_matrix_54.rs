pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
    let mut res = vec![0; matrix[0].len() * matrix.len()];

    let mut row_start = 0;
    let mut row_end: i32 = (matrix.len() - 1) as i32;
    let mut col_start = 0;
    let mut col_end: i32 = (matrix[0].len() - 1) as i32;

    let mut index = 0;
    let mut direction = 0;

    while row_start <= row_end && col_start <= col_end {
        match direction {
            0 => {
                // right
                for i in col_start..=col_end {
                    res[index] = matrix[row_start as usize][i as usize];
                    index += 1;
                }
                row_start += 1;
            }
            1 => {
                // down
                for i in row_start..=row_end {
                    res[index] = matrix[i as usize][col_end as usize];
                    index += 1;
                }
                col_end -= 1;
            }
            2 => {
                // left
                for i in (col_start..=col_end).rev() {
                    res[index] = matrix[row_end as usize][i as usize];
                    index += 1;
                }
                row_end -= 1;
            }
            3 => {
                // up
                for i in (row_start..=row_end).rev() {
                    res[index] = matrix[i as usize][col_start as usize];
                    index += 1;
                }
                col_start += 1;
            }
            _ => {}
        }

        direction = (direction + 1) % 4
    }

    res
}
