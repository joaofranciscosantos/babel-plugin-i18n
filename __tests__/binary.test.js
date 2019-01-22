const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('./.dictionary.json');
const plugin = require('../index.js');

describe('When using babel-plugin-i18n module', () => {
  const source = join(__dirname, '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n(1+1)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe('1+1;');
    done();
  });
  it('', done => {
    const {code} = transform('i18n("na"+"dar")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.nadar.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(1+"dar")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary['1dar'].en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n("cu"+2)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.cu2.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n("pala"+"dar", "it")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"paladar";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n("na"+"dar", "it")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"nadar";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(1+"dar", "it")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"1dar";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n("cu"+2, "it")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"cu2";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n("it"+"alia", "it")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.italia.it}";`);
    done();
  });
});
