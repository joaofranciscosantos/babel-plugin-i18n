[![Build Status](https://travis-ci.org/joaofranciscosantos/babel-plugin-i18n.svg?branch=master)](https://travis-ci.org/joaofranciscosantos/babel-plugin-i18n)
[![Install Size](https://packagephobia.now.sh/badge?p=@joaofranciscosantos/babel-plugin-i18n)](https://packagephobia.now.sh/result?p=@joaofranciscosantos/babel-plugin-i18n)[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fbf774077a5545989adc6860033299eb)](https://app.codacy.com/app/joao.francis.santos/babel-plugin-i18n?utm_source=github.com&utm_medium=referral&utm_content=joaofranciscosantos/babel-plugin-i18n&utm_campaign=Badge_Grade_Settings)
[![CodeFactor](https://www.codefactor.io/repository/github/joaofranciscosantos/babel-plugin-i18n/badge)](https://www.codefactor.io/repository/github/joaofranciscosantos/babel-plugin-i18n)
[![Npm Version](https://badge.fury.io/js/%40joaofranciscosantos%2Fbabel-plugin-i18n.svg)](https://badge.fury.io/js/%40joaofranciscosantos%2Fbabel-plugin-i18n)
![License](https://img.shields.io/github/license/joaofranciscosantos/babel-plugin-i18n.svg)
[![Dependencies Status](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n/status.svg)](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n)
[![DevDependencies Status](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n/dev-status.svg)](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/joaofranciscosantos/babel-plugin-i18n/badge.svg?targetFile=package.json)](https://snyk.io/test/github/joaofranciscosantos/babel-plugin-i18n?targetFile=package.json)

# babel-plugin-i18n

Efficient Multi-Language Text Translator for Babel.

## How to use
### Setup
Install it:
```bash
npm install --save-dev @joaofranciscosantos/babel-plugin-i18n
```
and add it to .babelrc as plugin:
```json
{
  "plugins": [["@joaofranciscosantos/babel-plugin-i18n"]]
}
```

### Plugin Options
- `source` the location of dictionary file. Defaults to `.dictionary.json`.
- `target` function that is going to do the translation. Defaults to `i18n`. 
- `language` set a language. Defaults to `en`.
```json
{
  "plugins": [["@joaofranciscosantos/babel-plugin-i18n", {"language": "pt"}]]
}
```

### API
```
i18n(text: string, language: string)
```
- `text` text to translate.
- `language` *(optional)* overrides the language set by plugin.

### Dictionary
```json
{
  "keyword": {
    "language": "translation"
  },
  "dog": {
    "en": "dog",
    "pt": "cão",
    "es": "perro",
    "it": "cane"
  }
}
```

### Examples
- `i18n("dog")` transpiles to `"dog"`
- `i18n("dog", "es")` transpiles to `"perro"`
- `i18n("none", "?")` transpiles to `"none"`

### Tests
```bash
npm test
```
## Use Cases

* Setup your multi-language source at compile time. A different build for each language.
```json
{
  "env": {
    "production:en": {
      "plugins": [["@joaofranciscosantos/babel-plugin-i18n"]]
    },
    "production:it": {
      "plugins": [["@joaofranciscosantos/babel-plugin-i18n", {"language": "it"}]]
    },
    "production:fr": {
      "plugins": [["@joaofranciscosantos/babel-plugin-i18n", {"language": "fr"}]]
    }
  }
}
```
