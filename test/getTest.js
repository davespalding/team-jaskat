import get from '../src/get.js';
import chai from 'chai';
const assert = chai.assert;

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe('Unit test - get.js', () => {
    it('get object "a" - Pass', () => {
        const result = get(object, 'a');
        const expct = ([{ 'b': { 'c': 3 } }]);
        assert.deepEqual(result, expct);
    });
    it('get object "abc" - Fail', () => {
        const result = get(object, 'abc');
        const expct = ([{ 'b': { 'c': 3 } }]);
        assert.notDeepEqual(result, expct);
    });
    it('get object "b" - Pass', () => {
        const result = get(object, 'a[0].b.c');
        const expct = (3);
        assert.deepEqual(result, expct);
    });
});