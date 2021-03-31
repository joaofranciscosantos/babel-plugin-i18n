const {readFileSync} = require('fs');
const {resolve} = require('path');
const entry = require('./src');

const defaults = {
  source: ['.dictionary.json'],
  target: 'i18n',
  language: 'en',
};

const readDictionarySources = (sources = []) => {
  const readDictionarySource = src => JSON.parse(readFileSync(resolve(src), 'utf8'));
  const merged = {};
  sources.forEach(source => {
    const dictionary = readDictionarySource(source);
    Object.keys(dictionary).forEach(keyword => {
      const languages = dictionary[keyword];
      Object.keys(languages).forEach(language => {
        merged[keyword] = { ...merged[keyword], [language]: languages[language] };
      });
    });
  });
  return merged;
};

module.exports = (context, input = {}) => {
  let dictionary = {};
  try {
    dictionary = readDictionarySources(input.source || defaults.source);
  } catch {
    console.warn('[babel-plugin-i18n] no translation provided.');
  }
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
