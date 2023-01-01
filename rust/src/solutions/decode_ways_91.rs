pub fn num_decodings(s: String) -> i32 {
    if s.len() == 0 {
        return 0;
    }

    let chars: Vec<char> = s.chars().collect();

    let mut dp: Vec<i32> = vec![0; s.len() + 1];
    dp[0] = 1;
    dp[1] = if chars[0] == '0' { 0 } else { 1 };

    for i in 2..dp.len() {
        if chars[i - 1] != '0' {
            dp[i] += dp[i - 1];
        }

        if chars[i - 2] == '1' || (chars[i - 2] == '2' && chars[i - 1] <= '6') {
            dp[i] += dp[i - 2];
        }
    }

    dp.last().unwrap().clone()
}
