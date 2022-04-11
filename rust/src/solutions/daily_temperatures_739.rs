pub fn daily_temperatures(temperatures: Vec<i32>) -> Vec<i32> {
    let mut stack: Vec<usize> = vec![];
    let mut res: Vec<i32> = vec![0; temperatures.len()];

    for i in (0..temperatures.len()).rev() {
        while let Some(top) = stack.last() {
            if temperatures[*top] > temperatures[i] {
                break;
            }

            stack.pop();
        }

        res[i] = if stack.is_empty() {
            0
        } else {
            (stack.last().unwrap() - i) as i32
        };

        stack.push(i);
    }

    res
}
