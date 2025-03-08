function countOdds(low, high) {
  const newLow = low % 2 === 0 ? low + 1 : low;
  const newHigh = high % 2 === 0 ? high - 1 : high;

  return (newHigh - newLow) / 2 + 1;
}
