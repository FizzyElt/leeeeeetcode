use std::cmp::max;

pub fn add_binary(a: String, b: String) -> String {
    let mut carry = 0;

    let mut b_chars = b.chars().rev();
    let mut a_chars = a.chars().rev();

    let max_length = max(a.len(), b.len());

    let mut res_num: Vec<i32> = vec![0; max_length + 1];

    for i in 0..max_length + 1 {
        let sum = match (a_chars.next(), b_chars.next()) {
            (Some(a_char), Some(b_char)) => {
                let num_a = a_char.to_digit(10).unwrap_or(0) as i32;
                let num_b = b_char.to_digit(10).unwrap_or(0) as i32;

                num_a + num_b + carry
            }
            (Some(a_char), None) => {
                let num_a = a_char.to_digit(10).unwrap_or(0) as i32;

                num_a + carry
            }
            (None, Some(b_char)) => {
                let num_b = b_char.to_digit(10).unwrap_or(0) as i32;

                num_b + carry
            }
            _ => carry,
        };

        res_num[i] = sum % 2;
        carry = sum / 2;
    }

    let res_num: String = res_num.into_iter().map(|n| n.to_string()).rev().collect();

    let res_string = res_num.trim_start_matches("0").to_string();

    if res_string.len() == 0 {
        return "0".to_string();
    }

    res_string
}
