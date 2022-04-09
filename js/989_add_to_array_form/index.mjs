function addToArrayForm(num, k) {
  let kNum = [];
  let n = k;
  while (n > 0) {
    kNum.push(n % 10);
    n = Math.floor(n / 10);
  }

  const maxLength = Math.max(num.length, kNum.length);
  let reversedNum = num.reverse();
  let carry = 0;
  let resNum = [];

  for (let i = 0; i < maxLength; i++) {
    const numA = reversedNum[i] ?? 0;
    const numB = kNum[i] ?? 0;

    const sum = numA + numB + carry;

    resNum.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    resNum.push(carry);
  }

  return resNum.reverse();
}
