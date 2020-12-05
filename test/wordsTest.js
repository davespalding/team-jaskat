import words from '../src/words.js';
import chai from 'chai';
const assert = chai.assert;


describe('Unit test - words.js', () => {
    it('Removing offending material - Pass', () => {
        const result = words('fred, barney, & pebbles', /[^, ]+/g);
        const expct = ([ 'fred', 'barney', '&', 'pebbles' ]);
        assert.deepEqual(result, expct);
    });
    it('Removing offending material - Pass', () => {
        const result = words('fred, barney, & pebbles');
        const expct = ([ 'fred', 'barney', 'pebbles' ]);
        assert.deepEqual(result, expct);
    });
    it('Removing offending material - Fail', () => {
        const result = words('fred, barney &, ||>>, pebbles');
        const expct = ([ 'fred', 'barney', '&', 'pebbles' ]);
        assert.notDeepEqual(result, expct);
    });
});