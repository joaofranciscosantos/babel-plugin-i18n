const {join} = require('path');
const {transform} = require('@babel/core');
const identifierHelper = require('../identifier-helper');
const dictionary = require('../../../__tests__/.dictionary.json');
const plugin = require('../../../..');

describe.skip('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('const a = {"nadar": {"en": "puta"}}; const b = i18n(a);', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = {\n  "nadar": {\n    "en": "puta"\n  }\n};\nconst b = ${identifierHelper('a')};`);
    done();
  });
  it('', done => {
    const {code} = transform('const a = {"nadar": {"en": "puta"}}; const b = i18n(a, "it");', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = {\n  "nadar": {\n    "en": "puta"\n  }\n};\nconst b = a["it"];`);
    done();
  });
  it('', done => {
    const {code} = transform('const a = 1; const b = i18n(a, "it");', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = {\n  "nadar": {\n    "en": "puta"\n  }\n};\nconst b = a.toString();`);
    done();
  });
  it('', done => {
    const {code} = transform('const a = [1,2,3]; const b = i18n(a);', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = {\n  "nadar": {\n    "en": "puta"\n  }\n};\nconst b = a["en"];`);
    done();
  });
  it('', done => {
    const {code} = transform('const a = null; const b = i18n(a, "it");', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = {\n  "nadar": {\n    "en": "puta"\n  }\n};\nconst b = null;`);
    done();
  });
});
