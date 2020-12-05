import count from '../src/countBy.js';
import chai from 'chai';
const assert = chai.assert;

const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'betty', 'active': true },
       { 'user': 'fred', 'active': false }
    ];

describe('Unit test - countBy.js', () => {
    it('countBy with active user - Pass', () => {
        const result = count(users, value => value.active);
        const expct = ({'true' : 1, 'false' : 0});
        assert.deepEqual(result, expct);
    });
    it('countBy with active user - Fail', () => {
        const result = count(users, value => value.active);
        const expct = ({'true' : 2, 'false' : 1})
        assert.notDeepEqual(result, expct);
    });
});
