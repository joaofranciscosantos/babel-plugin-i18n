[![Install Size](https://packagephobia.now.sh/badge?p=@joaofranciscosantos/babel-plugin-i18n)](https://packagephobia.now.sh/result?p=@joaofranciscosantos/babel-plugin-i18n)
[![Npm Version](https://badge.fury.io/js/%40joaofranciscosantos%2Fbabel-plugin-i18n.svg)](https://badge.fury.io/js/%40joaofranciscosantos%2Fbabel-plugin-i18n)
![License](https://img.shields.io/github/license/joaofranciscosantos/babel-plugin-i18n.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/joaofranciscosantos/babel-plugin-i18n/badge)](https://www.codefactor.io/repository/github/joaofranciscosantos/babel-plugin-i18n)
[![Dependencies Status](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n/status.svg)](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n)
[![Known Vulnerabilities](https://snyk.io/test/github/joaofranciscosantos/babel-plugin-i18n/badge.svg?targetFile=package.json)](https://snyk.io/test/github/joaofranciscosantos/babel-plugin-i18n?targetFile=package.json)

# babel-plugin-i18n
Multi language builds for Babel. Setup a different build for each language.

## API
```
i18n(text: string, language?: string) : string
```
- `text` text to translate.
- `language` *(optional)* overrides the language set by the plugin.

#### Examples
- `i18n("dog", "es")` transpiles to `"perro"`
- `i18n("dog")` transpiles to `"doggy"`
- `i18n("none", "?")` transpiles to `"none"`
  - Returns the original text because no translation was provided.


## Setup
```bash
npm install -D @joaofranciscosantos/babel-plugin-i18n
```
and add it to .babelrc as plugin:
#### Plugin options
- `source` *(array)* the path of dictionary files. Defaults to `.dictionary.json`.
- `target` *(string)* function that is going to do the translation. Defaults to `i18n`.
- `language` *(string)* set the translation language. Defaults to `en`.
```json
{
  "plugins": [["@joaofranciscosantos/babel-plugin-i18n", {
    "source": ["translations/en.json", "dict.json"],
    "language": "pt"
  }]]
}
```

#### Dictionary file(s)
```json
{
  "keyword": {
    "language": "translation"
  },
  "dog": {
    "en": "doggy",
    "pt": "cão",
    "es": "perro",
    "it": "cane"
  }
}
```

## Tests
```bash
npm test
```
