pub fn multiply(num1: String, num2: String) -> String {
    let mut ans = vec![0; num1.len() + num2.len()];
    for (i, ch1) in num1.chars().rev().peekable().enumerate() {
        for (j, ch2) in num2.chars().rev().peekable().enumerate() {
            let a = ch1.to_digit(10).unwrap();
            let b = ch2.to_digit(10).unwrap();

            let lo = (a * b + ans[i + j]) % 10;
            let hi = (a * b + ans[i + j]) / 10;
            ans[i + j] = lo;
            ans[i + j + 1] += hi;
        }
    }
    while ans.len() > 1 && ans.last() == Some(&0) {
        ans.pop();
    }
    ans.into_iter()
        .rev()
        .map(|s| s.to_string())
        .collect::<String>()
}
