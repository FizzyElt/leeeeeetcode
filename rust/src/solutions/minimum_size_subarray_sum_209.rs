use std::cmp::min;
pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
    let mut sum = 0;
    let mut right = -1;
    let mut left = 0;
    let mut min_len = nums.len() as i32;

    while right < nums.len() as i32 {
        if sum < target {
            right += 1;
            sum += nums.get(right as usize).unwrap_or(&0);
            continue;
        }

        min_len = min(right - left, min_len as i32);

        sum -= nums[left as usize];
        left += 1;
    }

    if min_len == nums.len() as i32 {
        return 0;
    }

    (min_len + 1) as i32
}
