const {readFileSync} = require('fs');
const {resolve} = require('path');
const entry = require('./src');

const defaults = {
  source: '.dictionary.json',
  target: 'i18n',
  language: 'en'
};

module.exports = (context, input = {}) => {
  const dictionary = JSON.parse(readFileSync(resolve(input.source || defaults.source), 'utf8'));
  const target = input.target || defaults.target;
  const language = input.language || defaults.language;
  return {
    visitor: {
      CallExpression: {
        enter: path => entry(path, {target, language, dictionary})
      }
    }
  }
};
