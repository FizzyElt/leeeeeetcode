pub fn longest_ideal_string(s: String, k: i32) -> i32 {
    let mut dp = vec![0; 27];

    for c in s.bytes().rev() {
        let ascii = c as i32;
        let idx = ascii - ('a' as i32);

        let mut maxi = i32::MIN;

        let left = (idx - k).max(0);
        let right = (idx + k).min(26);

        for j in left..=right {
            maxi = maxi.max(dp[j as usize]);
        }

        dp[idx as usize] = maxi + 1;
    }

    let mut max = i32::MIN;
    for i in dp {
        if i > max {
            max = i
        }
    }
    max
}
