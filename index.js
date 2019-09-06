const {readFileSync} = require('fs');
const {resolve} = require('path');
const entry = require('./src');

const defaults = {
  source: '.dictionary.json',
  target: 'i18n',
  language: 'en'
};

const readDictionarySources = (sources) => {
  const readDictionarySource = src => JSON.parse(readFileSync(resolve(src), 'utf8'));
  let dictionary = {};
  if (sources && Array.isArray(sources)) {
    sources.forEach(source => {
      dictionary = { ...dictionary, ...readDictionarySource(source) };
    });
    return dictionary;
  }
  return readDictionarySource(sources);
};

module.exports = (context, input = {}) => {
  const dictionary = readDictionarySources(input.source || defaults.source);
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
