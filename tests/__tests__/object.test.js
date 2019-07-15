const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../.dictionary');
const plugin = require('../../index');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n({"a": "bolas", "b": "3"})', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`undefined;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n({"en": "hello", "b": "3", "1": true, a: 1})', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"hello";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n({it: "goy", "b": "3"}, "pt")', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`undefined;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n({it: "goy", "b": "3"}, "it")', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"goy";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String("bolos"))', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String(i18n(new String("bolos"))))', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.Benfica.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String(new String("bolos")))', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String("bolos"+"nadar"))', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}${dictionary.nadar.en}";`);
    done();
  });
});
