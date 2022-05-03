pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let mut res: Vec<Vec<i32>> = vec![];

    dfs(vec![], 0, target, 0, &mut res, &candidates);

    res
}

fn dfs(
    arr: Vec<i32>,
    sum: i32,
    target: i32,
    curr_index: usize,
    res: &mut Vec<Vec<i32>>,
    candidates: &Vec<i32>,
) {
    if sum > target {
        return;
    }

    if sum == target {
        res.push(arr.clone());
    }

    for i in curr_index..candidates.len() {
        let mut new_arr = arr.clone();
        new_arr.push(candidates[i]);
        dfs(new_arr, sum + candidates[i], target, i, res, candidates);
    }
}
