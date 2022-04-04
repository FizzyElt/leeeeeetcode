pub fn average(salary: Vec<i32>) -> f64 {
    let mut sum = 0;
    let mut min = 1000001;
    let mut max = 0;

    let length = salary.len() as f64;

    for value in salary {
        if value > max {
            max = value;
        }
        if value < min {
            min = value;
        }

        sum += value;
    }

    (sum - max - min) as f64 / (length - 2.00)
}
