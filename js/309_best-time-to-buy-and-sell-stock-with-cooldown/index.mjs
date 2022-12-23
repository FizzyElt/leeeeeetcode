// state machine version
function maxProfit(prices) {
  const state0 = prices.map(() => 0);
  const state1 = prices.map(() => 0);
  const state2 = prices.map(() => 0);

  state1[0] = prices[0] * -1;
  state2[0] = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < prices.length; i++) {
    state0[i] = Math.max(state0[i - 1], state2[i - 1]);
    state1[i] = Math.max(state1[i - 1], state0[i - 1] - prices[i]);
    state2[i] = state1[i - 1] + prices[i];
  }

  return Math.max(state0.at(-1), state2.at(-1));
}

// optimize version
function maxProfit2(prices) {
  let state0 = 0;
  let state1 = prices[0] * -1;
  let state2 = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < prices.length; i++) {
    const temp = state0;
    state0 = Math.max(state0, state2);

    state2 = state1 + prices[i];

    state1 = Math.max(state1, temp - prices[i]);
  }

  return Math.max(state0, state2);
}
