import capital from '../src/capitalize';
import chai from 'chai';
const assert = chai.assert;

describe('Unit test - capitalize.js', () => {
    it('capitalize - Pass', () => {
        assert(capital('TAMPERE')).equal('Tampere', true);
    });
    it('capitalize - Fail', () => {
        assert(capital('ESPOO')).notEqual('espoo', true);
    });
});