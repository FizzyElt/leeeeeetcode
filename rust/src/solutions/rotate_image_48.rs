pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
    let len = matrix.len();

    matrix.reverse();

    for i in 0..len {
        for j in 0..i {
            let temp = matrix[i][j];

            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}
