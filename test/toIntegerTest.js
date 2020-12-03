import integer from '../src/toInteger';
import chai from 'chai';
const assert = chai.assert;

describe('Unit test - toInteger.js', () => {
    it('toInteger - Pass', () => {
        assert(integer(3.2)).equal(3);
    });
    it('toInteger - Fail', () => {
        assert(integer(4.1)).notEqual(4.1);
    });
})