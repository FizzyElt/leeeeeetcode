function plusOne(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + carry > 9) {
      digits[i] = (digits[i] + carry) % 10;
      carry = 1;
    } else {
      digits[i] = digits[i] + carry;
      carry = 0;
    }
  }

  if (carry !== 0) {
    return [carry, ...digits];
  }

  return digits;
  return digits;
}
