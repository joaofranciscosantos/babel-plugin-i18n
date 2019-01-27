const {join} = require('path');
const {transform} = require('@babel/core');
const dictionary = require('./.dictionary.json');
const dictionaryAvd = require('./.dictionary-advanced.json');
const plugin = require('../..');

describe('When using babel-plugin-i18n module, must be able to resolve', () => {
  const source = join(__dirname, '.dictionary.json');
  const sourceV2 = join(__dirname, '.dictionary-advanced.json');
  it('bad language, null', done => {
    const {code} = transform('i18n("bolos", null)', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('bad lnaguage, object', done => {
    const {code} = transform('i18n("bolos", {})', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('bad language, function', done => {
    const {code} = transform('i18n("bolos", ()=>{})', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('valid language', done => {
    const {code} = transform('i18n("bolos", "pt")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.pt}";`);
    done();
  });
  it('bad language, empty', done => {
    const {code} = transform('i18n("bolos", "")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('no target', done => {
    const {code} = transform('benfas("nadar")', { plugins: [() => plugin(null, {source})] });
    expect(code).toBe(`benfas("nadar");`);
    done();
  });
  it('target change', done => {
    const {code} = transform('sporting("nadar")', { plugins: [() => plugin(null, {source, target: 'sporting'})] });
    expect(code).toBe(`"${dictionary.nadar.en}";`);
    done();
  });
  it('target change for another language', done => {
    const {code} = transform('rafa("nadar", "pt")', { plugins: [() => plugin(null, {source, target: 'rafa'})] });
    expect(code).toBe(`"${dictionary.nadar.pt}";`);
    done();
  });
  it('language change', done => {
    const {code} = transform('i18n("nadar")', { plugins: [() => plugin(null, {source, language: 'pt'})] });
    expect(code).toBe(`"${dictionary.nadar.pt}";`);
    done();
  });
  it('no translations for language', done => {
    const {code} = transform('i18n("nadar")', { plugins: [() => plugin(null, {source, language: 'not'})] });
    expect(code).toBe(`"nadar";`);
    done();
  });
  it('override default language', done => {
    const {code} = transform('i18n("nadar", "it")', { plugins: [() => plugin(null, {source, language: 'pt'})] });
    expect(code).toBe(`"${dictionary.nadar.it}";`);
    done();
  });
  it('language and target change', done => {
    const {code} = transform('oi("nadar")', { plugins: [() => plugin(null, {source, language: 'pt', target: 'oi'})] });
    expect(code).toBe(`"${dictionary.nadar.pt}";`);
    done();
  });
  it('dictionary change', done => {
    const {code} = transform('i18n("nadar")', { plugins: [() => plugin(null, {source: sourceV2})] });
    expect(code).toBe(`"${dictionaryAvd.nadar.en}";`);
    done();
  });
  it('dictionary, language and target change', done => {
    const {code} = transform('oi("nadar")', { plugins: [() => plugin(null, {source: sourceV2, language: 'pt', target: 'oi'})] });
    expect(code).toBe(`"${dictionaryAvd.nadar.pt}";`);
    done();
  });
  it('dictionary, target change and override language', done => {
    const {code} = transform('oi("nadar", "en")', { plugins: [() => plugin(null, {source: sourceV2, language: 'pt', target: 'oi'})] });
    expect(code).toBe(`"${dictionaryAvd.nadar.en}";`);
    done();
  });
  it('invalid arguments', done => {
    try {
      transform('i18n("bolos")', { plugins: [() => plugin()] });
      done.fail();
    } catch (e) {
      done()
    }
  });
});
