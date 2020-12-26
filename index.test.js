const { resolve } = require('path');
const { transform } = require('@babel/core');
const plugin = require('./index');

const source = resolve(__dirname, 'tests/.dictionary.json');
const sourceSplitOne = resolve(__dirname, 'tests/.dictionary.split1.json');
const sourceSplitTwo = resolve(__dirname, 'tests/.dictionary.split2.json');

const options = (args = {}, src) => ({ retainLines: true, plugins: [plugin(null, {source: src, ...args})] });
const transpile = (input, opts) => transform(input, options(opts, [source])).code;
const transpileSplit = (input, opts) => transform(input, options(opts, [sourceSplitOne, sourceSplitTwo])).code;

const executeTest = (...args) => [transpile, transpileSplit].map(func => func(...args));

describe('', () => {
  it('', () => {
    const oi = transpile('i18n("bear", null)');
    expect(oi).toBe('"bear";');
  });
})

module.exports = {
  executeTest
};
