const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../../__tests__/.dictionary.json');
const plugin = require('../../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '..', '__tests__', '.dictionary.json');
  it('double quote string', done => {
    const {code} = transform('i18n("bolos")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('double quote string, with spaces', done => {
    const {code} = transform('i18n("bolos_ ")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"bolos_ ";`);
    done();
  });
  it('single quote string', done => {
    const {code} = transform("i18n('cu2')", { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.cu2.en}";`);
    done();
  });
  it('no translation', done => {
    const randomKey = '__NOKEY_RANDOM__@_';
    const {code} = transform(`i18n("${randomKey}")`, { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${randomKey}";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('i18n(`nadar`)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.nadar.en}";`);
    done();
  });
  it('template string', done => {
    const {code} = transform('const a = "nadar"; i18n(`${a}`)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`const a = "nadar";\n"a";`);
    done();
  });
  it('template string, with spaces', done => {
    const {code} = transform('i18n(` pause!`)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`" pause!";`);
    done();
  });
});
