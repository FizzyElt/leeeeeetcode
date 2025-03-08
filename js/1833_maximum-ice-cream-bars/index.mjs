function maxIceCream(costs, coins) {
  const sorted = [...costs].sort((a, b) => a - b);
  const min = Math.min(...costs);
  let curr = coins;
  let i = 0;
  while (curr >= min) {
    if (!sorted[i] || sorted[i] > curr) {
      break;
    }

    curr -= sorted[i];
    i++;
  }

  return i;
}
