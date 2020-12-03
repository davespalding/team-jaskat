import add from '../src/add.js'
import pkg from 'chai';
const { assert } = pkg;

describe('Unit test - add.js', () => {
  it('Addition with positive values - Pass', () => {
    assert.equal(add(55, 100), 155);
  });
  it('Addition with positive values - Fail', () => {
    assert.notEqual(add(55, 100), 45);
  });
  it('Addition with negative values - Pass', () => {
    assert.equal(add(100, -55), 45);
  });
});
