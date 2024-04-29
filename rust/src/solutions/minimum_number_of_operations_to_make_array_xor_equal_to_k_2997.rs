pub fn min_operations(nums: Vec<i32>, k: i32) -> i32 {
    let res = nums.iter().fold(0, |acc, n| acc ^ n);

    let mut diff = res ^ k;

    let mut diff_count = 0;

    while diff != 0 {
        let bit = diff % 2;
        diff_count += bit;
        diff = diff >> 1
    }

    diff_count
}
