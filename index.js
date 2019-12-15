const {readFileSync} = require('fs');
const {resolve} = require('path');
const entry = require('./src');

const defaults = {
  source: ['.dictionary.json'],
  target: 'i18n',
  language: 'en'
};

const readDictionarySources = (sources = []) => {
  const readDictionarySource = src => JSON.parse(readFileSync(resolve(src), 'utf8'));
  const merged = {};
  sources.forEach(source => {
    const dictionary = readDictionarySource(source);
    Object.keys(dictionary).map(keyword => {
      const languages = dictionary[keyword];
      Object.keys(languages).map(language => {
        merged[keyword] = { ...merged[keyword], [language]: languages[language] };
      });
    });
  });
  return merged;
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
