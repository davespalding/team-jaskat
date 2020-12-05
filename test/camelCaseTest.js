import camelCase from '../src/camelCase.js';
import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;

describe('Unit test - camelCase.js', () => {
    it('camelCase convertion - Pass', () => {
        const result = camelCase(" TommySHELBY");
        const expct = (" tommyShelby");
        assert.equal(result, expct);
    });
    it('camelCase convertion - Fail', () => {
        const result = camelCase(" TOMMYSHELBY");
        const expct = (" tommyShelby");
        assert.notEqual(result, expct);
    });
    it('camelCase convertion - Fail', () => {
        const result = camelCase(" johnsmith");
        const expct = (" ");
        assert.notEqual(result, expct);
    });
});