function spiralOrder(matrix) {
  const res = Array.from({ length: matrix.length * matrix[0].length });

  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  let index = 0;
  let direction = 0;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    if (direction === 0) {
      // right
      for (let i = colStart; i <= colEnd; i++) {
        res[index] = matrix[rowStart][i];
        index += 1;
      }
      rowStart += 1;
    } else if (direction === 1) {
      //down
      for (let i = rowStart; i <= rowEnd; i++) {
        res[index] = matrix[i][colEnd];
        index += 1;
      }
      colEnd -= 1;
    } else if (direction === 2) {
      for (let i = colEnd; i >= colStart; i--) {
        res[index] = matrix[rowEnd][i];
        index += 1;
      }
      rowEnd -= 1;
      // left
    } else if (direction === 3) {
      // up
      for (let i = rowEnd; i >= rowStart; i--) {
        res[index] = matrix[i][colStart];
        index += 1;
      }
      colStart += 1;
    }

    direction = (direction + 1) % 4;
  }

  return res;
}

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]),
);

// row 0-2 col 0-2
// 1 row 1-2 col 0-2
// 2 row 1-2 col 0-1
// 3 row 1-1 col 0-1
// 4 row 1-1 col 1-1
// 5 row 1-0 col 1-1
