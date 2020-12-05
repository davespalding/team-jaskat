import capital from '../src/capitalize.js';
import chai from 'chai';
const assert = chai.assert;

describe('Unit test - capitalize.js', () => {
    it('capitalize convertion - Pass', () => {
        const result = capital('tampere');
        const expct = ('Tampere');
        assert.equal(result, expct);
    });
    it('capitalize convertion - Pass', () => {
        const result = capital('ESPOO');
        const expct = ('Espoo');
        assert.equal(result, expct);
    });
    it('capitalize convertion - Fail', () => {
        const result = capital('ESPOO');
        const expct = ('');
        assert.notEqual(result, expct);
    });
});
