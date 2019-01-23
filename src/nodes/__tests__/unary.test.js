const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../__tests__/.dictionary.json');
const plugin = require('../../..');

describe('When using babel-plugin-i18n module', () => {
  const source = join(__dirname, '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n(true ? "bolos": "Benfica")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(false ? "bolos": "Benfica")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(0 ? "bolos": "Benfica")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(1 ? "bolos": "Benfica")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n((("bolos")))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('() => i18n("bolos")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`() => "${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('function a() { return i18n("bolos") }', { plugins: [() => plugin(null, {source})] });
    expect(code).toEqual(`function a() {\n  return "${dictionary.bolos.en}";\n}`);
    done();
  });
  it('', done => {
    const {code} = transform('(() => i18n("bolos"))()', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`(() => "${dictionary.bolos.en}")();`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(i18n("bolos"))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.Benfica.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(false)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`i18n("nadar");`);
    done();
  });
  it('', done => {
    const {code} = transform('let a = 1; i18n(++a)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`i18n("nadar");`);
    done();
  });
  it('', done => {
    const {code} = transform('let a = 1; i18n(--a)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`i18n("nadar");`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(this)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`i18n("nadar");`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(true && false)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`i18n("nadar");`);
    done();
  });
  it('', done => {
    const {code} = transform('let a = 1; i18n(a++)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`i18n("nadar");`);
    done();
  });
  it('', done => {
    const {code} = transform('let a = 1; i18n(a--)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`i18n("nadar");`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(true)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`i18n("nadar");`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(()=>{})', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`()=>{};`);
    done();
  });
});
