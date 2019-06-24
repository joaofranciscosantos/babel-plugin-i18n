const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../__tests__/.dictionary.json');
const plugin = require('../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n(["nadar", "bolos"])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.nadar.en}", "${dictionary.bolos.en}"];`);
    done();
  });
  it('', done => {
    const {code} = transform('[i18n("bolos"), "3"]', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.bolos.en}", "3"];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([i18n("bolos"), "3"])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.Benfica.en}", "3"];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([i18n("bolos"), "bolos"])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.Benfica.en}", "${dictionary.bolos.en}"];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(["bolos", 0, -1, 1])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.bolos.en}", 0, -1, 1];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(["3", 0, -1, 1, true, , false])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["3", 0, -1, 1, true, undefined, false];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([1, null, undefined, 0, "null", "undefined"])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`[1, null, undefined, 0, "null", "undefined"];`);
    done();
  });
  it('', done => {
    const {code} = transform('const a = "bolos"; i18n([a])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = "bolos";[a];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([`123`, new String("bolos"), () => { return "nadar"; }])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["123", "${dictionary.bolos.en}", undefined];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(["-1", function oi () { return "bolos"; }])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["-1", undefined];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([1.23, class oi {}, 1.9 ])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`[1.23, undefined, 1.9];`);
    done();
  });
  it('', done => {
    const {code} = transform('[{ a: i18n("bolos"), b: 123 }, { a: "" }]', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`[{ a: "${dictionary.bolos.en}", b: 123 }, { a: "" }];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([{a: "bolos", b: 123}, { a: "" }])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`[undefined, undefined];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([{en: "bolos", b: 123}, { "a": "1" }])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`["${dictionary.bolos.en}", undefined];`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n([{a: i18n("bolos"), b: 123}, { a: {} }])', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`[undefined, undefined];`);
    done();
  });
});
