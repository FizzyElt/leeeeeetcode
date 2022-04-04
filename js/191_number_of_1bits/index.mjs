function hammingWeight(n) {
  let count = 0;
  while (n) {
    n = n & (n - 1);
    count += 1;
  }
  return count;
}
