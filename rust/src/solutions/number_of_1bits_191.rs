pub fn hammingWeight(n: u32) -> i32 {
    let mut rest_num = n;
    let mut count: i32 = 0;
    while rest_num != 0 {
        rest_num = rest_num & (rest_num - 1);

        count += 1;
    }

    return count;
}
