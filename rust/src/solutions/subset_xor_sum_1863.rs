pub fn subset_xor_sum(nums: Vec<i32>) -> i32 {
    nums.into_iter()
        .fold(vec![0], |acc, num| {
            let new_acc = acc.clone().into_iter().map(|x| x ^ num);
            acc.into_iter().chain(new_acc).collect()
        })
        .into_iter()
        .fold(0, |acc, n| acc + n)
}

#[cfg(test)]
mod tests {
    use super::subset_xor_sum;

    #[test]
    fn subset_xor_sum_one_item() {
        assert_eq!(subset_xor_sum(vec![1]), 1);
    }
    #[test]
    fn subset_xor_sum_three_item() {
        assert_eq!(subset_xor_sum(vec![5, 1, 6]), 28);
    }
    #[test]
    fn subset_xor_sum_six_item() {
        assert_eq!(subset_xor_sum(vec![3, 4, 5, 6, 7, 8]), 480);
    }
}
