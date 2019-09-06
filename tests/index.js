const { resolve } = require('path');
const { transform } = require('@babel/core');
const plugin = require('../index');

const source = resolve(__dirname, '.dictionary.json');
const sourceSplitOne = resolve(__dirname, '.dictionary.split1.json');
const sourceSplitTwo = resolve(__dirname, '.dictionary.split2.json');

const options = (args = {}, source) => ({ retainLines: true, plugins: [plugin(null, {source, ...args})] });
const transpile = (input, opts) => console.log(transform(input, options(opts, source)).code);
const transpileSplit = (input, opts) => console.log(transform(input, options(opts, [sourceSplitOne, sourceSplitTwo])).code);

const executeTest = (...args) => [transpile, transpileSplit].forEach(func => func(...args));

module.exports = {
  executeTest
};
