const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../../__tests__/.dictionary.json');
const plugin = require('../../../..');

describe('When using babel-plugin-i18n module', () => {
  const source = join(__dirname, '..', '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n()', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`null;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(null)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`null;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(undefined)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`null;`);
    done();
  });
});
