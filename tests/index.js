const { join } = require('path');
const { transform } = require('@babel/core');
const plugin = require('../index');

const source = join(__dirname, '.dictionary.json');
const options = { retainLines: true, plugins: [plugin(null, {source})] };
const transpile = input => console.log(transform(input, options).code);

module.exports = {
  transpile
};
