import ceil from '../src/ceil.js';
import chai from 'chai';
const assert = chai.assert;


describe('Unit test - ceil.js', () => {
    it('ceil - Pass', () => {
        const result = ceil(3.222);
        assert.equal(result, 4);
    });
    it('ceil - Fail', () => {
        const result = ceil(0.126);
        assert.notEqual(result, 2);
    });
    it('ceil - Pass', () => {
        const result = ceil(22.003);
        assert.equal(result, 23);
    });
});
