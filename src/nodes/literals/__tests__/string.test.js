const {join} = require('path');
const {transform} = require('@babel/core');
const identifierHelper = require('../identifier-helper');
const dictionary = require('../../../__tests__/.dictionary.json');
const plugin = require('../../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '..', '__tests__', '.dictionary.json');
  it('double quote string', done => {
    const {code} = transform('i18n("bolos")', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('double quote string, with spaces', done => {
    const {code} = transform('i18n("bolos_ ")', { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"bolos_ ";`);
    done();
  });
  it('single quote string', done => {
    const {code} = transform("i18n('cu2')", { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.cu2.en}";`);
    done();
  });
  it('no translation', done => {
    const randomKey = '__NOKEY_RANDOM__@_';
    const {code} = transform(`i18n("${randomKey}")`, { retainLines: true, plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${randomKey}";`);
    done();
  });
});
