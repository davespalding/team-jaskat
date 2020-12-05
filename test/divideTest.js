import divide from '../src/divide.js';
import chai from 'chai';
const assert = chai.assert;


describe('Unit test - divide.js', () => {
    it('divide - Pass', () => {
        const result = divide(10, 5);
        assert.equal(result, 1);
    });
    it('divide - Fail', () => {
        const result = divide(5, 10);
        assert.notEqual(result, 5);
    });
    it('divide - Pass', () => {
        const result = divide(6, 4);
        assert.equal(result, 1);
    });
});
