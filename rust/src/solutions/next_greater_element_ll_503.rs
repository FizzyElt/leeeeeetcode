pub fn next_greater_elements(nums: Vec<i32>) -> Vec<i32> {
    let mut stack: Vec<i32> = nums.clone().into_iter().rev().collect();
    let mut res = vec![-1; nums.len()];

    for i in (0..nums.len()).rev() {
        while let Some(top) = stack.last() {
            if *top > nums[i] {
                break;
            }
            stack.pop();
        }

        res[i] = match stack.last() {
            Some(top) => *top,
            None => -1,
        };
        stack.push(nums[i]);
    }

    res
}
