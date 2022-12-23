use std::cmp::max;

// state machine version
pub fn max_profit(prices: Vec<i32>) -> i32 {
    let mut state0 = vec![0; prices.len()];
    let mut state1 = vec![0; prices.len()];
    let mut state2 = vec![0; prices.len()];

    state1[0] = prices[0] * -1;
    state2[0] = i32::MIN;

    for i in 1..prices.len() {
        state0[i] = max(state0[i - 1], state2[i - 1]);
        state1[i] = max(state1[i - 1], state0[i - 1] - prices[i]);
        state2[i] = state1[i - 1] + prices[i];
    }

    max(*state0.last().unwrap(), *state2.last().unwrap())
}

// optimize version
pub fn max_profit_2(prices: Vec<i32>) -> i32 {
    let mut state0 = 0;
    let mut state1 = prices[0] * -1;
    let mut state2 = i32::MIN;

    for i in 1..prices.len() {
        let temp = state0;

        state0 = max(state0, state2);
        state2 = state1 + prices[i];
        state1 = max(state1, temp - prices[i])
    }

    max(state0, state2)
}
