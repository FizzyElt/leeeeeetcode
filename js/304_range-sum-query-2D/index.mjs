function NumMatrix(matrix) {
  const nCols = matrix[0].length;
  const nRows = matrix.length;

  if (nRows === 0 || nCols === 0) return;

  this.prefix = new Array(nRows + 1)
    .fill(0)
    .map((val) => new Array(nCols + 1).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      this.prefix[i + 1][j + 1] =
        matrix[i][j] +
        this.prefix[i][j + 1] +
        this.prefix[i + 1][j] -
        this.prefix[i][j];
    }
  }
}

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.prefix[row2 + 1][col2 + 1] -
    this.prefix[row1][col2 + 1] -
    this.prefix[row2 + 1][col1] +
    this.prefix[row1][col1]
  );
};
