use std::cmp;
pub fn smallest_range_ii(nums: Vec<i32>, k: i32) -> i32 {
    let mut arr = nums;
    arr.sort();

    let len = arr.len();

    let lowest = arr[0];
    let highest = arr[len - 1];

    let mut res = highest - lowest;

    for i in 0..len {
        let min = cmp::min(lowest + k, arr[i + 1] - k);
        let max = cmp::max(highest - k, arr[i] + k);

        res = cmp::min(max - min, res);
    }

    res
}
