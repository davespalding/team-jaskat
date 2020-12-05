import integer from '../src/toInteger.js';
import chai from 'chai';
const assert = chai.assert;

describe('Unit test - toInteger.js', () => {
    it('toInteger - Pass', () => {
        const result = integer(3.2);
        assert.equal(result, 3);
    });
    it('toInteger - Pass', () => {
        const result = integer('3.2');
        assert.equal(result, 3);
    });
    it('toInteger - Fail', () => {
        const result = integer(4343.343788329839283928);
        assert.notEqual(result, 3);
    });
})
