import assert from 'assert';
import { subsetXORSum, subsetXORSum2 } from './index.mjs';
describe('1863 subset xor sum', () => {
  it('input: [1,3]', () => {
    const input = [1, 3];
    const answer = 6;
    assert.equal(subsetXORSum(input), answer);
    assert.equal(subsetXORSum2(input), answer);
  });

  it('input: [5,1,6]', () => {
    const input = [5, 1, 6];
    const answer = 28;
    assert.equal(subsetXORSum(input), answer);
    assert.equal(subsetXORSum2(input), answer);
  });

  it('input: [3,4,5,6,7,8]', () => {
    const input = [3, 4, 5, 6, 7, 8];
    const answer = 480;
    assert.equal(subsetXORSum(input), answer);
    assert.equal(subsetXORSum2(input), answer);
  });
});
