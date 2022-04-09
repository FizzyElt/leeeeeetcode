use std::cmp::max;
pub fn add_to_array_form(num: Vec<i32>, k: i32) -> Vec<i32> {
    let mut k_num: Vec<i32> = vec![];
    let mut n = k;
    while n > 0 {
        k_num.push(n % 10);
        n /= 10;
    }

    let max_length = max(k_num.len(), num.len());
    let mut carry = 0;
    let mut num_iter = num.into_iter().rev();
    let mut k_num_iter = k_num.into_iter();
    let mut res_num: Vec<i32> = vec![0; max_length + 1];

    for i in 0..max_length + 1 {
        let sum = match (num_iter.next(), k_num_iter.next()) {
            (Some(num_a), Some(num_b)) => num_a + num_b + carry,
            (Some(num_a), None) => num_a + carry,
            (None, Some(num_b)) => num_b + carry,
            _ => carry,
        };

        res_num[i] = sum % 10;
        carry = sum / 10;
    }

    res_num.into_iter().rev().skip_while(|n| *n == 0).collect()
}
