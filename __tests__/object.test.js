const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('./.dictionary.json');
const plugin = require('../index.js');

describe('When using babel-plugin-i18n module', () => {
  const source = join(__dirname, '.dictionary.json');
  it.skip('', done => {
    const {code} = transform('i18n({"a": "bolas", "b": "3"})', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
});
