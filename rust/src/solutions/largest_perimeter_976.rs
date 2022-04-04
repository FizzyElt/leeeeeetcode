pub fn largest_perimeter(nums: Vec<i32>) -> i32 {
    let mut nums = nums;
    nums.sort_by(|a, b| b.cmp(a));

    for i in 0..(nums.len() - 2) {
        if nums[i] < nums[i + 1] + nums[i + 2] {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }

    0
}
