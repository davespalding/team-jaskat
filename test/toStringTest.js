import string from '../src/toString.js';
import chai from 'chai';
const assert = chai.assert;


describe('Unit test - toString.js', () => {
    it('convertion into string - Pass', () => {
        const result = string(12);
        assert.equal(result, '12');
    });
    it('convertion of an array into string - Pass', () => {
        const result = string([1,2,3]);
        assert.equal(result, '1,2,3');
    });
    it('convertion into string - Fail', () => {
        const result = string(null);
        assert.notEqual(result, '');
    });
});