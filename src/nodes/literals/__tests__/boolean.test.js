const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../../__tests__/.dictionary.json');
const plugin = require('../../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '..', '__tests__', '.dictionary.json');
  it('false literal', done => {
    const {code} = transform('i18n(false)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`false;`);
    done();
  });
  it('true literal', done => {
    const {code} = transform('i18n(true)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`true;`);
    done();
  });
});
