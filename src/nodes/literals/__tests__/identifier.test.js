const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../../__tests__/.dictionary.json');
const plugin = require('../../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '..', '__tests__', '.dictionary.json');
  it('template string, with variables', done => {
    const {code} = transform('const a = "nadar"; const b = i18n(`${a}`);', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = "nadar";\nconst b = "${dictionary.nadar.en}";`);
    done();
  });
  it('template string, with variables and spaces', done => {
    const {code} = transform('const a = "nadar"; const b = i18n(`ola${a} !`);', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = "nadar";\nconst b = "olanadar !";`);
    done();
  });
  it.only('', done => {
    const {code} = transform('const a = "nadar"; const b = i18n(a);', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = "nadar";\nconst b = "${dictionary.nadar.en}";`);
    done();
  });
});
