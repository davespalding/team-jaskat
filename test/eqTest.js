import eq from '../src/eq.js'
import pkg from 'chai';
const { assert } = pkg;

describe('Unit test - eq.js', () => {
  it('Matching numbers - Pass', () => {
    assert.equal(eq(55, 55), true);
  });
  it('Matching numbers - Fail', () => {
    assert.notEqual(eq(40, 55), true);
  });
  it('Matching numbers - Pass', () => {
    assert.equal(eq(40, 55), false);
  });
});
