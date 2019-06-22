const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../__tests__/.dictionary.json');
const plugin = require('../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
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
    const {code} = transform('i18n(["3", 0, -1, 1, true, , false])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["3", 0, -1, 1, true, undefined, false];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([1, null, undefined, 0, "null", "undefined"])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`[1, null, undefined, 0, "null", "undefined"];`);
    done();
  });
  it('', done => {
    const {code} = transform('const a = "bolos"; i18n([a])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = "bolos";\n["a"];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([`123`, new String("bolos"), () => { return "nadar"; }])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["123", "${dictionary.bolos.en}", undefined];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(["-1", function oi () { return "bolos"; }])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["-1", undefined];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([1.23, class oi {}, 1.9 ])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`[1.23, undefined, 1.9];`);
    done();
  });
});
