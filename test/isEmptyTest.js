import empty from '../src/isEmpty.js';
import chai from 'chai';
const assert = chai.assert;

describe('Unit test - isEmpty.js', () => {
    it('isEmpty - Pass', () => {
        const result = empty(null);
        assert.equal(result, true);
    });
    it('isEmpty - Pass', () => {
        const result = empty(1);
        assert.equal(result, true);
    });
    it('isEmpty - Fail', () => {
        const result = empty('abc');
        assert.equal(result, false);
    });
})