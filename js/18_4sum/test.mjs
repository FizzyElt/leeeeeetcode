import assert from 'assert';
import { fourSum } from './index.mjs';

describe('18 4sum', () => {
  it('input = [1,0,-1,0,-2,2], target = 0', () => {
    const nums = [1, 0, -1, 0, -2, 2];
    const target = 0;
    const answer = [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ];

    assert.deepEqual(fourSum(nums, target), answer);
  });
  it('input = [1,0,-1,0,-2,2], target = 0', () => {
    const nums = [2, 2, 2, 2, 2];
    const target = 8;
    const answer = [[2, 2, 2, 2]];

    assert.deepEqual(fourSum(nums, target), answer);
  });
  it('input = [1,0,-1,0,-2,2], target = 0', () => {
    const nums = [0, 0, 0, 0];
    const target = 0;
    const answer = [[0, 0, 0, 0]];

    assert.deepEqual(fourSum(nums, target), answer);
  });
});
