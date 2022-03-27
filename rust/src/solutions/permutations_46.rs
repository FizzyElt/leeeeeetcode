pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
    if nums.is_empty() {
        return vec![vec![]];
    }

    nums.iter()
        .flat_map(|x| {
            let new_nums: Vec<i32> = nums.clone().into_iter().filter(|y| *y != *x).collect();

            permute(new_nums)
                .into_iter()
                .map(|mut v| {
                    v.insert(0, *x);
                    v
                })
                .collect::<Vec<Vec<i32>>>()
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::permute;

    #[test]
    fn permute_one_item() {
        assert_eq!(permute(vec![1]), vec![vec![1]]);
    }
    #[test]
    fn permute_two_items() {
        assert_eq!(permute(vec![1, 2]), vec![vec![1, 2], vec![2, 1]]);
    }
    #[test]
    fn permute_three_items() {
        assert_eq!(
            permute(vec![1, 2, 3]),
            vec![
                vec![1, 2, 3],
                vec![1, 3, 2],
                vec![2, 1, 3],
                vec![2, 3, 1],
                vec![3, 1, 2],
                vec![3, 2, 1]
            ]
        );
    }
}
