const {readFileSync} = require('fs');
const {resolve} = require('path');
const src = require('./src');

module.exports = (context, input = {}) => {
  const dictionary = JSON.parse(readFileSync(resolve(input.source || '.dictionary.json'), 'utf8'))
  const target = input.target || 'i18n';
  const language = input.language || 'en';
  return {
    visitor: {
      CallExpression: {
        enter: path => src(path, {target, language, dictionary})
      }
    }
  }
};
