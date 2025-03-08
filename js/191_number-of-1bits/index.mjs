function hammingWeight(n) {
  let num = n;
  let count = 0;
  while (num) {
    num = num & (num - 1);
    count += 1;
  }
  return count;
}
