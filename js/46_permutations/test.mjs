import assert from 'assert';

import { permute, permute2, permute3 } from './index.mjs';

describe('permutation', () => {
  it('input: [1],output: [[1]]', () => {
    const input = [1];
    const answer = [[1]];
    assert.deepEqual(answer, permute(input));
    assert.deepEqual(answer, permute2(input));
    assert.deepEqual(answer, permute3(input));
  });

  it('input: [1,2],output: [[1,2],[2,1]]', () => {
    const input = [1, 2];
    const answer = [
      [1, 2],
      [2, 1],
    ];
    assert.deepEqual(answer, permute(input));
    assert.deepEqual(answer, permute2(input));
    assert.deepEqual(answer, permute3(input));
  });

  it('input: [1,2,3],output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]', () => {
    const input = [1, 2, 3];
    const answer = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];
    assert.deepEqual(answer, permute(input));
    assert.deepEqual(answer, permute2(input));
    assert.deepEqual(answer, permute3(input));
  });
});
