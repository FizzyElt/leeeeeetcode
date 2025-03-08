function multiply(num1, num2) {
  let ans = new Array(num1.length + num2.length).fill(0);

  const num1List = num1.split("").reverse();
  const num2List = num2.split("").reverse();

  num1List.forEach((ch1, index1) => {
    num2List.forEach((ch2, index2) => {
      const num1 = Number.isNaN(Number.parseInt(ch1))
        ? 0
        : Number.parseInt(ch1);
      const num2 = Number.isNaN(Number.parseInt(ch2))
        ? 0
        : Number.parseInt(ch2);

      const lo = (num1 * num2 + ans[index1 + index2]) % 10;
      const hi = Math.floor((num1 * num2 + ans[index1 + index2]) / 10);

      ans[index1 + index2] = lo;
      ans[index1 + index2 + 1] += hi;
    });
  });

  ans = ans.reverse();
  const noneZeroIndex = ans.findIndex((n) => n !== 0);

  return ans
    .slice(noneZeroIndex)
    .map((n) => n.toString())
    .join("");
}

function multiplyByOne(stringNums, stringNum) {
  let carry = 0;
  const num = Number.parseInt(stringNum);

  const newStringNums = [...stringNums];
  for (let i = newStringNums.length - 1; i >= 0; i--) {
    const multiplyNum = Number.parseInt(newStringNums[i]);

    const product = multiplyNum * num;

    newStringNums[i] = ((product + carry) % 10).toString();
    carry = Math.floor((product + carry) / 10);
  }

  if (carry > 0) {
    return [carry.toString(), ...newStringNums];
  }

  return newStringNums;
}
