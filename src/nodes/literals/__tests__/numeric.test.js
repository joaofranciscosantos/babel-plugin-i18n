const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../../__tests__/.dictionary.json');
const plugin = require('../../../..');

describe('When using babel-plugin-i18n module', () => {
  const source = join(__dirname, '..', '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n(0)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`0;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(1000)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`1000;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(1)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`1;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(-1)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`-1;`);
    done();
  });
});
