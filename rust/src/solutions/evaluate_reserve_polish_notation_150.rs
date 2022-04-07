pub fn eval_rpn(tokens: Vec<String>) -> i32 {
    let mut stack: Vec<i32> = vec![];

    for token in tokens {
        match token.as_str() {
            "+" => {
                let right_number = stack.pop().unwrap();
                let left_number = stack.pop().unwrap();

                stack.push(left_number + right_number);
            }
            "-" => {
                let right_number = stack.pop().unwrap();
                let left_number = stack.pop().unwrap();

                stack.push(left_number - right_number);
            }
            "*" => {
                let right_number = stack.pop().unwrap();
                let left_number = stack.pop().unwrap();

                stack.push(left_number * right_number);
            }
            "/" => {
                let right_number = stack.pop().unwrap();
                let left_number = stack.pop().unwrap();

                stack.push(left_number / right_number);
            }
            token => {
                let number: i32 = token.parse::<i32>().unwrap();

                stack.push(number);
            }
        }
    }

    stack[0]
}
