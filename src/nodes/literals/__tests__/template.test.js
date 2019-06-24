const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../../__tests__/.dictionary.json');
const plugin = require('../../../..');
const identifierHelper = require('../identifier-helper');

describe.skip('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '..', '__tests__', '.dictionary.json');
  it('template string', done => {
    const {code} = transform('i18n(`nadar`)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.nadar.en}";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('const a = "nadar"; i18n(`${a}`)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = "nadar";\n"${identifierHelper}";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('const a = 18; i18n(`${a}`)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = 18;\n"" + ${identifierHelper} + "";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('const a = "nadar"; i18n(`${a}==`)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = "nadar";\n"" + ${identifierHelper} + "==";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('const a = "nadar"; i18n(`!!${a}`)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = "nadar";\n"!!" + ${identifierHelper} + "";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('const a = "nadar"; i18n(` ? ${a} - `)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = "nadar";\n" ? " + ${identifierHelper} + " - ";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('const a = null; i18n(` ? ${a} - `)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = null;\n" ? " + ${identifierHelper} + " - ";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('let a; i18n(` ? ${a} - `)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`let a;\n" ? " + ${identifierHelper} + " - ";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('let a; i18n(`${a}`)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`let a;\n"" + ${identifierHelper} + "";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('const a = true; i18n(` ? ${a} - `)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = true;\n" ? " + ${identifierHelper} + " - ";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('const a = {"nadar": {"en": "puta"}}; i18n(`${a} - `)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = {\n  "nadar": {\n    "en": "puta"\n  }\n};\n"" + ${identifierHelper} + " - ";`);
    done();
  });
  it('template string, with spaces', done => {
    const {code} = transform('i18n(` pause!`)', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`" pause!";`);
    done();
  });
});
