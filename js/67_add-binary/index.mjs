function addBinary(a, b) {
  const aChars = a.split("").reverse();
  const bChars = b.split("").reverse();

  const maxLength = Math.max(a.length, b.length);

  let res = new Array(maxLength).fill(0);
  let carry = 0;

  for (let i = 0; i < maxLength; i++) {
    const aNum = Number.isNaN(Number.parseInt(aChars[i]))
      ? 0
      : Number.parseInt(aChars[i]);
    const bNum = Number.isNaN(Number.parseInt(bChars[i]))
      ? 0
      : Number.parseInt(bChars[i]);

    const sum = aNum + bNum + carry;

    res[i] = sum % 2;
    carry = Math.floor(sum / 2);
  }

  if (carry > 0) {
    res.push(carry);
  }

  res = res.reverse();
  const noneZeroIndex = res.findIndex((n) => n !== 0);

  return res
    .slice(noneZeroIndex)
    .map((n) => n.toString())
    .join("");
}
