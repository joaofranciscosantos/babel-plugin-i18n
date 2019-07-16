const { resolve } = require('path');
const { transform } = require('@babel/core');
const plugin = require('../index');

const source = resolve(__dirname, '.dictionary.json');
const options = (args = {}) => ({ retainLines: true, plugins: [plugin(null, {source, ...args})] });
const transpile = (input, opts) => console.log(transform(input, options(opts)).code);

module.exports = {
  transpile
};
