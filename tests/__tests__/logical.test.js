const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../.dictionary');
const plugin = require('../../index');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '__tests__', '.dictionary.json');
  it('and operator', done => {
    const {code} = transform('i18n(true && false)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('and operator, with numbers', done => {
    const {code} = transform('i18n(false && 0)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('or operator', done => {
    const {code} = transform('i18n(false || false)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('or operator, with numbers', done => {
    const {code} = transform('i18n(0 || true)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`true;`);
    done();
  });
  it('and operator, then translate', done => {
    const {code} = transform('i18n(true && i18n("bolos"))', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.Benfica.en}";`);
    done();
  });
  it('and operator, then translate', done => {
    const {code} = transform('i18n(0 && i18n("nadar"))', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`0;`);
    done();
  });
});
