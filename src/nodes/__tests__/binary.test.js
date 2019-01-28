const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('../../__tests__/.dictionary.json');
const plugin = require('../../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '..', '..', '__tests__', '.dictionary.json');
  it('', done => {
    const {code} = transform('i18n(1+1)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe('2;');
    done();
  });
  it('', done => {
    const {code} = transform('i18n("nadar"+"!!!")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.nadar.en}!!!";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n("nadar"+"bolos", "pt")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.nadar.pt}${dictionary.bolos.pt}";`);
    done();
  });
  it('', done => {
    const {code} = transform('i18n("it"+"alia", "it")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"italia";`);
    done();
  });
});
