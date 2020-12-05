import clamp from '../src/clamp.js';
import chai from 'chai';
const assert = chai.assert;


describe('Unit test - clamp.js', () => {
    it('clamp with minimum range - Pass', () => {
        const result = clamp(-10, -5, 5);
        assert.equal(result, -5);
    });
    it('clamp with maximum range - Fail', () => {
        const result = clamp(10, -5, 5);
        assert.notEqual(result, 5);
    });
});
