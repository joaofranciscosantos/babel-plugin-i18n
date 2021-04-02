const { transpile, transpileSplit, badTranspile } = require('./utils-testing');

describe('', () => {
  it('', () => {
    expect(transpile('i18n("bear", null)')).toBe('"bear";');
    expect(transpile('i18n("bolos", {})')).toBe('"bolos";');
    expect(transpile('i18n("bolos", ()=>{})')).toBe('"bolos";');
    expect(transpile('i18n("bear", "pt")')).toBe('"urso";');
    expect(transpile('i18n("bear", "")')).toBe('"bear";');
    expect(transpile('benfas("bear")')).toBe('benfas("bear");');
    expect(transpile('sporting("bear")', { target: 'sporting' })).toBe('"bear";');
    expect(transpile('rafa("bear", "pt")', { target: 'rafa' })).toBe('"urso";');
    expect(transpile('i18n("bear")', { language: 'pt' })).toBe('"urso";');
    expect(transpile('rafa("bear", "pt")', { target: 'rafa' })).toBe('"urso";');
    expect(transpile('i18n("bear")', { language: 'not' })).toBe('"bear";');
    expect(transpile('i18n("dog", "it")', { language: 'pt' })).toBe('"cane";');
    expect(transpile('oi("bear")', { language: 'pt', target: 'oi' })).toBe('"urso";');
    expect(transpile('oi("bear", "en")', { language: 'pt', target: 'oi' })).toBe('"bear";');
    expect(transpile('i18n("bear")', { language: undefined, target: undefined })).toBe('"bear";');
  });
  it('', () => {
    expect(transpileSplit('i18n("bear", null)')).toBe('"bear";');
    expect(transpileSplit('i18n("bolos", {})')).toBe('"bolos";');
    expect(transpileSplit('i18n("bolos", ()=>{})')).toBe('"bolos";');
    expect(transpileSplit('i18n("bear", "pt")')).toBe('"urso";');
    expect(transpileSplit('i18n("bear", "")')).toBe('"bear";');
    expect(transpileSplit('benfas("bear")')).toBe('benfas("bear");');
    expect(transpileSplit('sporting("bear")', { target: 'sporting' })).toBe('"bear";');
    expect(transpileSplit('rafa("bear", "pt")', { target: 'rafa' })).toBe('"urso";');
    expect(transpileSplit('i18n("bear")', { language: 'pt' })).toBe('"urso";');
    expect(transpileSplit('rafa("bear", "pt")', { target: 'rafa' })).toBe('"urso";');
    expect(transpileSplit('i18n("bear")', { language: 'not' })).toBe('"bear";');
    expect(transpileSplit('i18n("dog", "it")', { language: 'pt' })).toBe('"cane";');
    expect(transpileSplit('oi("bear")', { language: 'pt', target: 'oi' })).toBe('"urso";');
    expect(transpileSplit('oi("bear", "en")', { language: 'pt', target: 'oi' })).toBe('"bear";');
    expect(transpileSplit('i18n("bear")', { language: undefined, target: undefined })).toBe('"bear";');
  });
});

describe('Failed', () => {
  it('should be able to detect an inexistent file', () => {
    expect(badTranspile('i18n("bear")')).toBe('"bear";');
    expect(badTranspile('i18n("bear", "it")')).toBe('"bear";');
  });
});
