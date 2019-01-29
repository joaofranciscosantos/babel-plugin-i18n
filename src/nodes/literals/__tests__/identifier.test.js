const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../../__tests__/.dictionary.json');
const plugin = require('../../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('const a = {"nadar": {"en": "puta"}}; const b = i18n(a);', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = {\n  "nadar": {\n    "en": "puta"\n  }\n};\nconst b = a["en"];`);
    done();
  });
  it('', done => {
    const {code} = transform('const a = {"nadar": {"en": "puta"}}; const b = i18n(a, "it");', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = {\n  "nadar": {\n    "en": "puta"\n  }\n};\nconst b = a["it"];`);
    done();
  });
});
