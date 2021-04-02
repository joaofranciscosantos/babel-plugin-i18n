const { resolve } = require('path');
const { transform } = require('@babel/core');
const plugin = require('..');

const source = resolve(__dirname, '.dictionary.json');
const badSource = resolve(__dirname, '.___.json');
const sourceSplitOne = resolve(__dirname, '.dictionary.split1.json');
const sourceSplitTwo = resolve(__dirname, '.dictionary.split2.json');

const options = (args = {}, src) => ({ retainLines: true, plugins: [plugin(null, {source: src, ...args})] });
const badTranspile = (input, opts) => transform(input, options(opts, [badSource])).code;
const transpile = (input, opts) => transform(input, options(opts, [source])).code;
const transpileSplit = (input, opts) => transform(input, options(opts, [sourceSplitOne, sourceSplitTwo])).code;

module.exports = {
  transpile,
  transpileSplit,
  badTranspile
};
