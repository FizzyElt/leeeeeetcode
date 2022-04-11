pub fn find_rotation(mat: Vec<Vec<i32>>, target: Vec<Vec<i32>>) -> bool {
    let mut mat = mat;

    if mat == target {
        return true;
    }
    for _ in 0..3 {
        mat = rotate(mat);

        if mat == target {
            return true;
        }
    }

    false
}

fn rotate(mat: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let len = mat.len();

    let mut new_mat = vec![vec![0; len]; len];

    for i in 0..len {
        for j in 0..len {
            new_mat[i][j] = mat[len - 1 - j][i];
        }
    }

    return new_mat;
}
