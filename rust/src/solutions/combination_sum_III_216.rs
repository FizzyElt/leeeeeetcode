pub fn combination_sum3(k: i32, n: i32) -> Vec<Vec<i32>> {
    let mut res: Vec<Vec<i32>> = vec![];

    fn dfs(
        res: &mut Vec<Vec<i32>>,
        k: i32,
        curr_arr: &mut Vec<i32>,
        start_index: i32,
        remain_number: i32,
    ) {
        if curr_arr.len() as i32 == k {
            if remain_number == 0 {
                res.push(curr_arr.clone());
            }
            return;
        }

        for i in start_index..=std::cmp::min(remain_number, 9) {
            curr_arr.push(i);
            dfs(res, k, curr_arr, i + 1, remain_number - i);
            curr_arr.pop();
        }
    }

    dfs(&mut res, k, &mut vec![], 1, n);

    res
}
