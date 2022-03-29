export function solveNQueens(n) {
  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => '.')
  );

  const res = [];

  function isValid(board, row, col) {
    for (let i = row; i >= 0; i--) {
      if (board[i][col] == 'Q') return false;
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == 'Q') return false;
    }
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] == 'Q') return false;
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      res.push(board.map((row) => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }

      board[row][col] = 'Q';

      backtrack(row + 1);

      board[row][col] = '.';
    }
  }

  backtrack(0);

  return res;
}
