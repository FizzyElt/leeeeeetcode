pub fn count_odds(low: i32, high: i32) -> i32 {
    let low = if low % 2 == 0 { low + 1 } else { low };
    let high = if high % 2 == 0 { high - 1 } else { high };

    (high - low) / 2 + 1
}
