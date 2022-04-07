pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
    let mut new_digits: Vec<i32> = digits.clone();
    let mut carry = 1;
    for i in (0..digits.len()).rev() {
        if new_digits[i] + carry > 9 {
            new_digits[i] = (new_digits[i] + carry) % 10;
            carry = 1;
        } else {
            new_digits[i] = new_digits[i] + carry;
            carry = 0;
        }
    }

    if carry != 0 {
        let mut carry_digits = vec![carry];
        carry_digits.append(&mut new_digits);
        return carry_digits;
    }

    new_digits
}
