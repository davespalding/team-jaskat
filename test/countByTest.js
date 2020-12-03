import count from '../src/countBy';
import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;

const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'betty', 'active': true },
       { 'user': 'fred', 'active': false }
    ];

describe('Unit test - countBy.js', () => {
    it('countBy - Pass', () => {
        const response = count(users, value => value.active);
        expect(response).to.deep.equal({'true' : 2, 'false' : 0});
    });
    it('countBy - Fail', () => {
        const response = count(users, value => value.active);
        expect(response).to.deep.notEqual({'true' : 1, 'false' : 0});
    });
});