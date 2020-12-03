import filter from '../src/filter.js'
import pkg from 'chai';
const { assert } = pkg;

const items = [
  { 'item': 'tomato', 'description': 'a healthy snack' },
  { 'item': 'chocolate', 'description': 'a yummy snack' }
]

describe('Unit test - filter.js', () => {
  it('Search criteria: “healthy” - Pass', () => {
    const search_hit = filter(items, ({ description }) => description.includes('healthy'))
    const expctd = [{ 'item': 'tomato', 'description': 'a healthy snack' }]
    assert.deepEqual(search_hit, expctd);
  });
  it('Search criteria: “healthy” - Fail', () => {
    const search_hit = filter(items, ({ description }) => description.includes('healthy'))
    assert.notDeepEqual(search_hit, [[]]);
  });
  it('Search criteria: “green” - Pass', () => {
    const search_hit = filter(items, ({ description }) => description.includes('green'))
    assert.deepEqual(search_hit, [[]]);
  });
});
