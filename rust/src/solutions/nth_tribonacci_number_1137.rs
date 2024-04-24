pub fn tribonacci(n: i32) -> i32 {
    let mut dp: Vec<i32> = vec![0, 1, 1];

    if n < 3 {
        return dp[n as usize];
    }

    for i in 3..=n {
        let n1: i32 = dp[(i - 1) as usize];
        let n2: i32 = dp[(i - 2) as usize];
        let n3: i32 = dp[(i - 3) as usize];

        dp.push(n1 + n2 + n3);
    }

    match dp.last() {
        Some(&res) => res,
        None => 0,
    }
}
