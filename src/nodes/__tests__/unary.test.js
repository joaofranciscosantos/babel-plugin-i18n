const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../__tests__/.dictionary.json');
const plugin = require('../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n(true ? "bolos": "Benfica")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(false ? "bolos": "Benfica")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.Benfica.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(0 ? "bolos" : "Benfica")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.Benfica.en}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(1 ? "bolos" : "Benfica")', { plugins: [() => plugin(null, {source})] });
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
    const {code} = transform('i18n(()=>{})', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`undefined;`);
    done();
  });
  it('null to false', done => {
    const {code} = transform('i18n(!!null)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('null to true', done => {
    const {code} = transform('i18n(!null)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`true;`);
    done();
  });
  it('zero to false', done => {
    const {code} = transform('i18n(!!0)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('zero to true', done => {
    const {code} = transform('i18n(!0)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`true;`);
    done();
  });
  it('positive number to true', done => {
    const {code} = transform('i18n(!!1)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`true;`);
    done();
  });
  it('array to true', done => {
    const {code} = transform('i18n(!![])', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`true;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(!{})', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(!true)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(!0)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`true;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(!!0)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n(!!(1 || 0))', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`true;`);
    done();
  });
});
