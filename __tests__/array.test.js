const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('./.dictionary.json');
const plugin = require('../index.js');

describe('When using babel-plugin-i18n module', () => {
  const source = join(__dirname, '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n(["nadar", "bolos"])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.nadar.en}", "${dictionary.bolos.en}"];`);
    done();
  });
  it.only('', done => {
    const {code} = transform('i18n([i18n("bolos"), "3"])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.Benfica.en}", "3"];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(["bolos", 0, -1, 1])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.bolos.en}", 0, -1, 1];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(["3", 0, -1, 1])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["3", 0, -1, 1];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(["abv", new String("bolos"), ()=>{}])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"["abv", "${dictionary.bolos.en}", () => {}]";`);
    done();
  });
});
