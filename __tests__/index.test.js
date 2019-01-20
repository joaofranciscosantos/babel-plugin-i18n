const {join} = require('path');
const babel = require('@babel/core');
const dictionary = require('./.dictionary.json');
const plugin = require('../index.js');

describe('When using babel-plugin-i18n module', () => {
  const defaultLanguage = 'en';
  it('', done => {
    const {code} = babel.transform('i18n("bolos")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos[defaultLanguage]}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("bolos", null)', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos[defaultLanguage]}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("bolos", {})', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos[defaultLanguage]}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("bolos", "")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos[defaultLanguage]}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("bolos", ()=>{})', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos[defaultLanguage]}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("bolos", "pt")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos.pt}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("bolos", null)', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos[defaultLanguage]}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('() => i18n("bolos")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`() => "${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('function a() { return i18n("bolos") }', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toEqual(`function a() {\n  return "${dictionary.bolos.en}";\n}`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('(() => i18n("bolos"))()', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`(() => "${dictionary.bolos.en}")();`);
    done();
  });
  it.skip('', done => {
    const {code} = babel.transform('i18n(i18n("bolos"))', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.Benfica.en}";`);
    done();
  });
  it.skip('', done => {
    const {code} = babel.transform('i18n([i18n("bolos"), "2", "3"])', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it.skip('', done => {
    const {code} = babel.transform('i18n(["3", "2", "3", 0, -1, 1, ()=>{}])', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it.skip('', done => {
    const {code} = babel.transform('i18n({"a": "bolas", "b": "3"})', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("nadar")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.nadar.en}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("putas")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"putas";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n(1000)', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`1000;`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n(0)', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`0;`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n(1)', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`1;`);
    done();
  });
  it.skip('', done => {
    const {code} = babel.transform('i18n(-1)', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`-1;`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n()', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`null;`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n(null)', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`null;`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n(undefined)', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`null;`);
    done();
  });
  it.skip('', done => {
    const {code} = babel.transform('i18n(1+1)', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`1+1;`);
    done();
  });
  it.skip('', done => {
    const {code} = babel.transform('i18n("na"+"dar")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.bolos.en}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('benfas("nadar")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`benfas("nadar");`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("nadar", "pt")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"${dictionary.nadar.pt}";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("nadar", "it")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`"nadar";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('rafa("nadar", "it")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary-advanced.json'), target: 'rafa'})]
    });
    expect(code).toBe(`"nadar";`);
    done();
  });
  it('', done => {
    const {code} = babel.transform('i18n("nadar")', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary-advanced.json'), language: 'pt'})]
    });
    expect(code).toBe(`"${dictionary.nadar.pt}";`);
    done();
  });
  it('', done => {
    try {
      babel.transform('i18n("bolos")', {
        plugins: [plugin]
      });
      done.fail();
    } catch (e) {
      done()
    }
  });
  it('', done => {
    try {
      babel.transform('i18n("bolos")', {
        plugins: [() => plugin()]
      });
      done.fail();
    } catch (e) {
      done()
    }
  });
  it.skip('', done => {
    const {code} = babel.transform('i18n(()=>{})', {
      plugins: [() => plugin(null, {source: join(__dirname, '.dictionary.json')})]
    });
    expect(code).toBe(`()=>{};`);
    done();
  });
});
