const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('./.dictionary.json');
const plugin = require('../index');

describe('When using babel-plugin-i18n module', () => {
  const source = join(__dirname, '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n({"a": "bolas", "b": "3"})', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String("bolos"))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String(new String("bolos")))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String("bo"+"los"))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
});
