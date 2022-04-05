pub fn is_monotonic(nums: Vec<i32>) -> bool {
    if nums.len() < 3 {
        return true;
    }

    let mut init_monotone = 0;

    for i in 0..(nums.len() - 1) {
        let monotone = if nums[i] > nums[i + 1] {
            1
        } else if nums[i] < nums[i + 1] {
            -1
        } else {
            0
        };

        if init_monotone != 0 && monotone != 0 && init_monotone != monotone {
            return false;
        }

        if init_monotone == 0 {
            init_monotone = monotone;
        }
    }

    return true;
}
