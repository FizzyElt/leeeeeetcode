function rotate(matrix) {
  const len = matrix.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[len - 1 - j][len - 1 - i];
      matrix[len - 1 - j][len - 1 - i] = temp;
    }
  }

  matrix.reverse()

  return matrix;
}
