import assert from 'assert';
import { threeSum } from './index.mjs';

describe('15 three sum', () => {
  it('input []', () => {
    const input = [];
    const answer = [];

    assert.deepEqual(threeSum(input), answer);
  });
  
  it('input [0]', () => {
    const input = [0];
    const answer = [];

    assert.deepEqual(threeSum(input), answer);
  });

  it('input [-1, 0, 1, 2, -1, -4]', () => {
    const input = [-1, 0, 1, 2, -1, -4];
    const answer = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];

    assert.deepEqual(threeSum(input), answer);
  });

  it('input [-1, -1, -2, 4, 3]', () => {
    const input = [-1, -1, -2, 4, 3];
    const answer = [[-2, -1, 3]];

    assert.deepEqual(threeSum(input), answer);
  });
});
