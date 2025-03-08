use std::vec;

pub fn count_bits(n: i32) -> Vec<i32> {
    let mut dp = vec![0; n as usize + 1];
    let mut offset: usize = 1;

    for i in 1..=n {
        if offset * 2 == i as usize {
            offset *= 2;
        }

        dp[i as usize] = dp[i as usize - offset] + 1
    }

    dp
}
