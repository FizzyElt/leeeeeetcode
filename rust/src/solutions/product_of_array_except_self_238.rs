pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
    let mut res = vec![1; nums.len()];
    let mut product = 1;
    for (i, num) in nums.iter().enumerate() {
        res[i] *= num * product;
        product *= num;
    }

    product = 1;

    for i in (0..nums.len()).rev() {
        let left = if i == 0 { 1 } else { res[i - 1] };
        res[i] = product * left;
        product *= nums[i];
    }

    res
}
