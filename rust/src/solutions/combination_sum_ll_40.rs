pub fn combination_sum2(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let mut res = vec![];
    let mut candidates = candidates;
    candidates.sort();
    dfs(&mut vec![], 0, target, 0, &candidates, &mut res);

    res
}

fn dfs(
    curr_arr: &mut Vec<i32>,
    sum: i32,
    target: i32,
    curr_index: usize,
    arr: &Vec<i32>,
    res: &mut Vec<Vec<i32>>,
) {
    if sum > target {
        return;
    }

    if sum == target {
        res.push(curr_arr.clone());
        return;
    }

    for i in curr_index..arr.len() {
        if i == curr_index || arr[i] != arr[i - 1] {
            curr_arr.push(arr[i]);
            dfs(curr_arr, sum + arr[i], target, i + 1, arr, res);
            curr_arr.pop();
        }
    }
}
