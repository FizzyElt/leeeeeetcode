pub fn num_subarray_product_less_than_k(nums: Vec<i32>, k: i32) -> i32 {
    if nums.len() == 0 || k <= 1 {
        return 0;
    }

    let mut start = 0;
    let mut product = 1;
    let mut count = 0;

    for end in 0..nums.len() {
        product *= nums[end];

        while product >= k && start <= end {
            product /= nums[start];
            start += 1;
        }
        count += end - start + 1;
    }

    count as i32
}
