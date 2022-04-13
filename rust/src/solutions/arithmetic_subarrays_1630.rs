pub fn check_arithmetic_subarrays(nums: Vec<i32>, l: Vec<i32>, r: Vec<i32>) -> Vec<bool> {
    let m = l.len();
    let mut res = vec![false; m];

    for i in 0..m {
        let start = l[i] as usize;
        let end = r[i] as usize;

        let mut sub_arr: Vec<&i32> = nums[start..=end].iter().collect();

        sub_arr.sort();
        res[i] = is_arithmetic(&sub_arr);
    }

    res
}

fn is_arithmetic(nums: &Vec<&i32>) -> bool {
    let diff = nums[1] - nums[0];

    for i in 2..nums.len() {
        if nums[i] - nums[i - 1] != diff {
            return false;
        }
    }

    true
}
