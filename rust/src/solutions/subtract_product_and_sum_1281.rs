pub fn subtract_product_and_sum(n: i32) -> i32 {
    let mut sum = 0;
    let mut product = 1;

    let mut n = n;
    while n != 0 {
        let digit = n % 10;
        sum += digit;
        product *= digit;

        n /= 10;
    }

    product - sum
}
