pub fn find_duplicate(nums: Vec<i32>) -> i32 {
    let mut nums_check_list: Vec<bool> = vec![false; nums.len()];

    for num in nums {
        if nums_check_list[num as usize - 1] {
            return num;
        }
        nums_check_list[num as usize - 1] = true;
    }

    return 0;
}

#[cfg(test)]
mod tests {
    use super::find_duplicate;

    #[test]
    fn find_duplicate_test_1() {
        assert_eq!(find_duplicate(vec![1, 3, 4, 2, 2]), 2);
    }
    #[test]
    fn find_duplicate_test_2() {
        assert_eq!(find_duplicate(vec![3, 1, 3, 4, 2]), 3);
    }
}
