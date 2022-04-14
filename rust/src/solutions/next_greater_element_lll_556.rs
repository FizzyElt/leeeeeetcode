pub fn next_greater_element(n: i32) -> i32 {
    let mut digits: Vec<i32> = n
        .to_string()
        .chars()
        .map(|c| c.to_digit(10).unwrap_or(0) as i32)
        .collect();

    let mut pivot: i32 = -1;
    for i in (1..digits.len()).rev() {
        if digits[i - 1] < digits[i] {
            pivot = (i - 1) as i32;
            break;
        }
    }

    if pivot == -1 {
        return -1;
    }

    let pivot = pivot as usize;

    for i in (0..digits.len()).rev() {
        if digits[i] > digits[pivot] {
            let temp = digits[i];
            digits[i] = digits[pivot];
            digits[pivot] = temp;
            break;
        }
    }

    let mut right: Vec<i32> = digits.drain(pivot + 1..).rev().collect();
    digits.append(&mut right);

    digits
        .into_iter()
        .map(|d| char::from_digit(d as u32, 10).unwrap())
        .collect::<String>()
        .parse()
        .unwrap_or(-1)
}
