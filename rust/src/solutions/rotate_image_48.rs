pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
    let len = matrix.len();

    for i in 0..len {
        for j in 0..len - i {
            let temp = matrix[i][j];

            matrix[i][j] = matrix[len - 1 - j][len - 1 - i];
            matrix[len - 1 - j][len - 1 - i] = temp;
        }
    }

    matrix.reverse();
}
