pub fn can_jump(nums: Vec<i32>) -> bool {
    let mut max = nums[0];

    for i in 1..nums.len() {
        if max < i as i32 {
            return false;
        }
        max = std::cmp::max(max, nums[i] + i as i32);
    }
    true
}
