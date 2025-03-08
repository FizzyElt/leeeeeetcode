/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

function findWords(board, words) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const boardRow = board.length;
  const boardCol = board[0].length;

  const res = [];

  function buildTrie(words) {
    const root = {};
    for (const word of words) {
      let node = root;
      for (const c of word) {
        if (!node[c]) node[c] = {};
        node = node[c];
      }
      node.word = word;
    }

    return root;
  }

  function dfs(node, row, col) {
    if (node.word) {
      res.push(node.word);
      node.word = null;
    }

    if (row < 0 || row >= boardRow || col < 0 || col >= boardCol) return;

    const c = board[row][col];

    if (!node[c]) return;

    board[row][col] = "#";

    for (const [dr, dc] of directions) {
      dfs(node[c], row + dr, col + dc);
    }

    board[row][col] = c;
  }

  const root = buildTrie(words);

  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      dfs(root, i, j);
    });
  });

  return res;
}

// origin version
// var findWords = function (board, words) {
//   const traverse = board.map((row) => row.map(() => false));
//   const boardRow = board.length;
//   const boardCol = board[0].length;
//   const maxWordLen = Math.max(...words.map((word) => word.length));
//   const wordSet = new Set(words);

//   let res = new Set();

//   board.forEach((row, r) => {
//     row.forEach((cell, c) => {
//       traverse[r][c] = true;
//       dfs(cell, r, c, maxWordLen);
//       traverse[r][c] = false;
//     });
//   });

//   function dfs(word, row, col, maxWordLen) {
//     if (traverse[row][col]) {
//       return;
//     }

//     if (wordSet.has(word)) {
//       res.add(word);
//     }

//     if (word.length === maxWordLen) {
//       return;
//     }

//     const newWord = word + board[row][col];

//     traverse[row][col] = true;

//     if (row - 1 >= 0) {
//       dfs(newWord, row - 1, col, maxWordLen);
//     }

//     if (row + 1 <= boardRow) {
//       dfs(newWord, row + 1, col, maxWordLen);
//     }

//     if (col - 1 >= 0) {
//       dfs(newWord, row, col - 1, maxWordLen);
//     }

//     if (col + 1 <= boardCol) {
//       dfs(newWord, row, col + 1, maxWordLen);
//     }

//     traverse[row][col] = false;
//   }

//   return [...res];
// };
