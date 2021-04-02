const { transpile, transpileSplit } = require('../../utils-testing');

describe('For null literal', () => {
  it('', () => {
    expect(transpile('i18n()')).toBe('null;');
    expect(transpile('i18n(null)')).toBe('null;');
    expect(transpile('i18n(undefined)')).toBe('null;');
  });
  it('', () => {
    expect(transpileSplit('i18n()')).toBe('null;');
    expect(transpileSplit('i18n(null)')).toBe('null;');
    expect(transpileSplit('i18n(undefined)')).toBe('null;');
  });
});
