use std::vec;

pub fn four_sum(nums: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    if nums.len() < 4 {
        return vec![];
    };

    let mut res: Vec<Vec<i32>> = vec![];

    let mut sorted_nums: Vec<i32> = nums.clone();
    sorted_nums.sort();

    for (i, n) in sorted_nums[..(sorted_nums.len() - 3)].iter().enumerate() {
        if i > 0 && *n == sorted_nums[i - 1] {
            continue;
        }

        for j in i + 1..sorted_nums.len() - 2 {
            if j > i + 1 && sorted_nums[j] == sorted_nums[j - 1] {
                continue;
            }

            let mut left = j + 1;
            let mut right = sorted_nums.len() - 1;

            while left < right {
                let sum = n + sorted_nums[j] + sorted_nums[left] + sorted_nums[right];

                if sum > target {
                    right -= 1;
                } else if sum < target {
                    left += 1;
                } else {
                    res.push(vec![
                        *n,
                        sorted_nums[j],
                        sorted_nums[left],
                        sorted_nums[right],
                    ]);

                    while left < right && sorted_nums[left] == sorted_nums[left + 1] {
                        left += 1;
                    }
                    while left < right && sorted_nums[right] == sorted_nums[right - 1] {
                        right -= 1;
                    }
                    left += 1;
                    right -= 1;
                }
            }
        }
    }

    res
}

#[cfg(test)]
mod tests {
    use super::four_sum;

    #[test]
    fn four_sum_test_one() {
        assert_eq!(four_sum(vec![0, 0, 0, 0], 0), vec![vec![0, 0, 0, 0]]);
    }
    #[test]
    fn four_sum_test_two() {
        assert_eq!(four_sum(vec![2, 2, 2, 2, 2], 8), vec![vec![2, 2, 2, 2]]);
    }
    #[test]
    fn four_sum_test_three() {
        assert_eq!(
            four_sum(vec![1, 0, -1, 0, -2, 2], 0),
            vec![vec![-2, -1, 1, 2], vec![-2, 0, 0, 2], vec![-1, 0, 0, 1],]
        );
    }
}
