import camel from '../src/camelCase';
import chai from 'chai';
const assert = chai.assert;

describe('Unit test - camelCase.js', () => {
    it('camelCase - Pass', () => {
        assert(camel('iphone')).equal(('iPhone'), true);
    });
    it('camelCase - Fail', () => {
        assert(camel('ebay')).notEqual(('ebay'), false);
    });
    it('camelCase - Pass', () => {
        assert(camel('johnSmith')).equal(('johnsmith'), true);
    });
});