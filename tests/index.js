const { join } = require('path');
const plugin = require('../index');

const source = join(__dirname, '.dictionary.json');
const sourceAdvanced = join(__dirname, '.dictionary-advanced.json');

const options = { retainLines: true, plugins: [plugin(null, {source})] };
const optionsAdvanced = { retainLines: true, plugins: [plugin(null, {source: sourceAdvanced})] };

module.exports = {
  options,
  optionsAdvanced
};
