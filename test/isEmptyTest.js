import empty from '../src/isEmpty';
import chai from 'chai';
const assert = chai.assert;

describe('Unit test - isEmpty.js', () => {
    it('isEmpty - Pass', () => {
        assert(empty(null)).equal(true);
    });
    it('isEmpty - Fail', () => {
        assert(empty(1)).notEqual(false);
    });
    it('isEmpty - Pass', () => {
        assert(empty('abc')).equal(false);
    });
})