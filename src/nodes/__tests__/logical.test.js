const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../__tests__/.dictionary.json');
const plugin = require('../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '__tests__', '.dictionary.json');
  it('and operator', done => {
    const {code} = transform('i18n(true && false)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('and operator, with numbers', done => {
    const {code} = transform('i18n(false && 0)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('or operator', done => {
    const {code} = transform('i18n(false || false)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('or operator, with numbers', done => {
    const {code} = transform('i18n(0 || true)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`true;`);
    done();
  });
  it('and operator, then translate', done => {
    const {code} = transform('i18n(true && i18n("bolos"))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.Benfica.en}";`);
    done();
  });
  it('and operator, then translate', done => {
    const {code} = transform('i18n(0 && i18n("nadar"))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`0;`);
    done();
  });
});
