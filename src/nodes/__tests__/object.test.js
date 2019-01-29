const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../__tests__/.dictionary.json');
const plugin = require('../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n({"a": "bolas", "b": "3"})', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`undefined;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n({"en": "hello", "b": "3", "1": true, 2: 1})', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"hello";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n({it: "goy", "b": "3"}, "pt")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`undefined;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n({it: "goy", "b": "3"}, "it")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"goy";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String("bolos"))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String(i18n(new String("bolos"))))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.Benfica.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String(new String("bolos")))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(new String("bolos"+"nadar"))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}${dictionary.nadar.en}";`);
    done();
  });
});
