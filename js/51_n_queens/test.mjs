import assert from 'assert';
import { solveNQueens } from './index.mjs';
describe('51 N Queens', () => {
  it('n = 1', () => {
    const input = 1;
    const answer = [['Q']];

    assert(answer, solveNQueens(input));
  });
  it('n = 4', () => {
    const input = 1;
    const answer = [
      ['.Q..', '...Q', 'Q...', '..Q.'],
      ['..Q.', 'Q...', '...Q', '.Q..'],
    ];

    assert(answer, solveNQueens(input));
  });
  it('n = 5', () => {
    const input = 1;
    const answer = [
      ['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
      ['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
      ['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
      ['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
      ['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
      ['..Q..', '....Q', '.Q...', '...Q.', 'Q....'],
      ['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
      ['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
      ['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
      ['....Q', '..Q..', 'Q....', '...Q.', '.Q...'],
    ];

    assert(answer, solveNQueens(input));
  });
});
