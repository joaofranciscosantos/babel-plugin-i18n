const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../__tests__/.dictionary.json');
const plugin = require('../../..');

describe('When using babel-plugin-i18n module', () => {
  const source = join(__dirname, '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n(["nadar", "bolos"])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.nadar.en}", "${dictionary.bolos.en}"];`);
    done();
  });
  it('', done => {
    const {code} = transform('[i18n("bolos"), "3"]', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.bolos.en}", "3"];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([i18n("bolos"), "3"])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.Benfica.en}", "3"];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([i18n("bolos"), "bolos"])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.Benfica.en}", "${dictionary.bolos.en}"];`);
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
    const {code} = transform('i18n([true, null, false, undefined, 0 , 1, -1])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"["abv", "${dictionary.bolos.en}", () => {}]";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(["abv", new String("bolos"), (input => input)("bolos")])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"["abv", "${dictionary.bolos.en}", () => {}]";`);
    done();
  });
  it('', done => {
    const {code} = transform('const a = "bolos; i18n([`${a}`])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"["abv", "${dictionary.bolos.en}", () => {}]";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([`123`, new String("bolos"), () => { return "nadar"; }])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"["abv", "${dictionary.bolos.en}", () => {}]";`);
    done();
  });
  it.only('', done => {
    const {code} = transform('i18n(["-1", function oi () { return "bolos"; }])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"["abv", "${dictionary.bolos.en}", () => {}]";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([1.23, class oi {}, 1.9 ])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`[1.23, undefined, 1.9];`);
    done();
  });
});
