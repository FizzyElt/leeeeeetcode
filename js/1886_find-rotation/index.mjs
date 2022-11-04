function findRotation(num, target) {
  let newNum = num;

  if (deepEq(newNum, target)) return true;

  for (let i = 0; i < 3; i++) {
    newNum = rotate(newNum);
    if (deepEq(newNum, target)) {
      return true;
    }
  }

  return false;
}

function deepEq(num, target) {
  return num.reduce((acc, row, index) => {
    if (!acc) {
      return acc;
    }

    return row.every((v, j) => v === target[index][j]);
  }, true);
}

function rotate(num) {
  const len = num.length;
  let newArr = Array.from({ length: len }, () => new Array(len).fill(0));

  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j >= 0; j--) {
      newArr[i][len - 1 - j] = num[j][i];
    }
  }

  return newArr;
}
