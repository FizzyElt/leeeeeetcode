pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut res: Vec<Vec<i32>> = vec![];

    if nums.len() < 3 {
        return res;
    }

    let mut sorted_nums = nums.clone();
    sorted_nums.sort();

    for (i, n) in sorted_nums.iter().enumerate() {
        if *n > 0 {
            break;
        }

        if i > 0 && *n == sorted_nums[i - 1] {
            continue;
        }

        let mut left = i + 1;
        let mut right = sorted_nums.len() - 1;

        while left < right {
            let sum = n + sorted_nums[left] + sorted_nums[right];

            if sum < 0 {
                left += 1;
            } else if sum > 0 {
                right -= 1;
            } else {
                res.push(vec![*n, sorted_nums[left], sorted_nums[right]]);
                while left < right && sorted_nums[left + 1] == sorted_nums[left] {
                    left += 1;
                }
                while left < right && sorted_nums[right - 1] == sorted_nums[right] {
                    right -= 1;
                }
                left += 1;
                right -= 1;
            }
        }
    }

    res
}

#[cfg(test)]
mod tests {
    use super::three_sum;

    #[test]
    fn three_sum_test_empty() {
        let input: Vec<i32> = vec![];

        assert_eq!(three_sum(input), vec![] as Vec<Vec<i32>>);
    }

    #[test]
    fn three_sum_test_zero() {
        assert_eq!(three_sum(vec![0]), vec![] as Vec<Vec<i32>>);
    }

    #[test]
    fn three_sum_test_multiple_one() {
        assert_eq!(
            three_sum(vec![-1, 0, 1, 2, -1, -4]),
            vec![vec![-1, -1, 2], vec![-1, 0, 1],]
        );
    }
    #[test]
    fn three_sum_test_multiple_two() {
        assert_eq!(three_sum(vec![-1, -1, -2, 4, 3]), vec![vec![-2, -1, 3]]);
    }
}
