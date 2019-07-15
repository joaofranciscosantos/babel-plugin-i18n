const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../.dictionary');
const dictionaryAvd = require('../.dictionary-advanced');
const plugin = require('../../index');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n("water")', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.water.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n("water", "es")', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.water.es}";`);
    done();
  });
  it.only('', done => {
    const {code} = transform('i18n("water"+"bolos", "pt")', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.water.pt}${dictionary.bolos.pt}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(0 || "water")', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.water.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(true && i18n("water"))', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.water.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(0 && i18n("water"))', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`0;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n({"it": "fire", "b": "3"})', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`undefined;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(["water", "3"])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.water.en}", "3"];`);
    done();
  });
  it('', done => {
    const {code} = transform('[i18n("water"), "3"]', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.water.en}", "3"];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([i18n("water"), "3"])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["WateR", "3"];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(i18n(i18n("water")))', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"WateR";`);
    done();
  });
});
