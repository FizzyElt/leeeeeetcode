import assert from 'assert';
import { findDuplicate } from './index.mjs';

describe('findDuplicate', () => {
  it('input:[1,3,4,2,2]', () => {
    const input = [1, 3, 4, 2, 2];
    assert.equal(findDuplicate(input), 2);
  });
  it('input:', () => {
    const input = [3, 1, 3, 4, 2];
    assert.equal(findDuplicate(input), 3);
  });
});
