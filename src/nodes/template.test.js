const { transpile, transpileSplit } = require('../../utils-testing');

describe('For string template', () => {
  it('', () => {
    expect(transpile('i18n(`crocodile`, "pt")')).toBe('"crocodilo";');
    expect(transpile('i18n(`${"bear"}`, "pt")')).toBe('"urso";');
    expect(transpile('i18n(` bear  `, "pt")')).toBe('" bear  ";');
    expect(transpile('i18n(` pause!`)')).toBe('" pause!";');
  });
  it('', () => {
    expect(transpile('i18n(`p ${"oi"} ! ! ${"top"} ?`)')).toBe('"p oi ! ! top ?";');
  });
});

describe('For string template', () => {
  it('', () => {
    expect(transpileSplit('i18n(`crocodile`, "pt")')).toBe('"crocodilo";');
    expect(transpileSplit('i18n(`${"bear"}`, "pt")')).toBe('"urso";');
    expect(transpileSplit('i18n(` bear  `, "pt")')).toBe('" bear  ";');
    expect(transpileSplit('i18n(` pause!`)')).toBe('" pause!";');
  });
  it('', () => {
    expect(transpileSplit('i18n(`p ${"oi"} ! ! ${"top"} ?`)')).toBe('"p oi ! ! top ?";');
  });
});
