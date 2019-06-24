const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../../__tests__/.dictionary.json');
const plugin = require('../../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '..', '__tests__', '.dictionary.json');
  it('empty', done => {
    const {code} = transform('i18n()', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`undefined;`);
    done();
  });
  it('null', done => {
    const {code} = transform('i18n(null)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`null;`);
    done();
  });
  it('undefined', done => {
    const {code} = transform('i18n(undefined)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`undefined;`);
    done();
  });
});
