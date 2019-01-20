const {readFileSync} = require('fs');
const {resolve} = require('path');
const src = require('./src');

const readFile = source => {
  try {
    return JSON.parse(readFileSync(resolve(source || '.dictionary.json'), 'utf8'));
  } catch (e) {
    throw new Error(`file not found: ${e.path}`);
  }
};

module.exports = (context, input = {}) => {
  const dictionary = readFile(input.source);
  const targetFunctionName = input.target || 'i18n';
  const targetLanguage = input.language || 'en';
  return {
    visitor: {
      CallExpression: {
        enter: path => src(path, { targetFunctionName, targetLanguage, dictionary })
      }
    }
  }
};
