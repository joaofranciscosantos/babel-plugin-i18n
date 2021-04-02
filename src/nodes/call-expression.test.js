const { transpile, transpileSplit } = require('../../utils-testing');

describe('For call expression', () => {
  it('', () => {
    expect(transpile('i18n(i18n("bear", "pt"), "!!")')).toBe('"urso";');
    expect(transpile('i18n(i18n("bear", "??"), "es")')).toBe('"bear";');
    expect(transpile('i18n(i18n("bear", "it"), "es")')).toBe('"orso";');
    expect(transpile('i18n((("dog")), "it")')).toBe('"cane";');
    expect(transpile('i18n(i18n("dog"), "es")')).toBe('"perro";');
  });
  it('', () => {
    expect(transpileSplit('i18n(i18n("bear", "pt"), "!!")')).toBe('"urso";');
    expect(transpileSplit('i18n(i18n("bear", "??"), "es")')).toBe('"bear";');
    expect(transpileSplit('i18n(i18n("bear", "it"), "es")')).toBe('"orso";');
    expect(transpileSplit('i18n((("dog")), "it")')).toBe('"cane";');
    expect(transpileSplit('i18n(i18n("dog"), "es")')).toBe('"perro";');
  });
});
