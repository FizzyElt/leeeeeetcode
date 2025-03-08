function subtractProductAndSum(n) {
  let sum = 0;
  let product = 1;
  let num = n;

  while (num !== 0) {
    const digit = n % 10;
    sum += digit;
    product *= digit;

    num = Math.floor(n / 10);
  }

  return product - sum;
}
