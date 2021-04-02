const { transpile, transpileSplit } = require('../../utils-testing');

const randomKey = '__NOKEY_RANDOM__@_';

describe('For string literal', () => {
  it('', () => {
    expect(transpile('i18n("null")')).toBe('"null";');
    expect(transpile('i18n("cão")')).toBe('"dog";');
    expect(transpile('i18n("cão", "pt")')).toBe('"cão";');
    expect(transpile('i18n("cão_ ")')).toBe('"cão_ ";');
    expect(transpile("i18n('cão')")).toBe('"dog";');
    expect(transpile(`i18n("${randomKey}")`)).toBe('"__NOKEY_RANDOM__@_";');
  });
  it('', () => {
    expect(transpileSplit('i18n("null")')).toBe('"null";');
    expect(transpileSplit('i18n("cão")')).toBe('"dog";');
    expect(transpileSplit('i18n("cão", "pt")')).toBe('"cão";');
    expect(transpileSplit('i18n("cão_ ")')).toBe('"cão_ ";');
    expect(transpileSplit("i18n('cão')")).toBe('"dog";');
    expect(transpileSplit(`i18n("${randomKey}")`)).toBe('"__NOKEY_RANDOM__@_";');
  });
});
