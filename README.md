[![Install Size](https://packagephobia.now.sh/badge?p=@joaofranciscosantos/babel-plugin-i18n)](https://packagephobia.now.sh/result?p=@joaofranciscosantos/babel-plugin-i18n)
[![Npm Version](https://badge.fury.io/js/%40joaofranciscosantos%2Fbabel-plugin-i18n.svg)](https://badge.fury.io/js/%40joaofranciscosantos%2Fbabel-plugin-i18n)
![License](https://img.shields.io/github/license/joaofranciscosantos/babel-plugin-i18n.svg)
[![Dependencies Status](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n/status.svg)](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n)
[![Known Vulnerabilities](https://snyk.io/test/github/joaofranciscosantos/babel-plugin-i18n/badge.svg?targetFile=package.json)](https://snyk.io/test/github/joaofranciscosantos/babel-plugin-i18n?targetFile=package.json)

# babel-plugin-i18n
Multi language builds with Babel. Setup a different build for each language.

:sparkles: Provide translations during compile time.

:sparkles: No need to include MB translations files in your bundle.

:sparkles: End of repetitive http request with translations.

## API
```
i18n(text: string, language?: string) : string
```
- `text` original text.
- `language` *(optional)* overrides the language set by the plugin.

## Setup
```bash
npm install --save-dev @joaofranciscosantos/babel-plugin-i18n
```

and add to `.babelrc.js`:
```javascript
module.exports = api => ({
  plugins: [["@joaofranciscosantos/babel-plugin-i18n"]]
});
```

to override options:
```javascript
module.exports = api => ({
  plugins: [["@joaofranciscosantos/babel-plugin-i18n", {
    source: ["translations.json", "translations/canada.json", "yo.json"],
    target: "i18n",
    language: "pt"
  }]]
});
```
- `source` *(array)* the path with translations files. They will be all merged during resolution. Defaults to `.dictionary.json`.
- `target` *(string)* function that will apply the translation. Defaults to `i18n`.
- `language` *(string)* set the translation language. Defaults to `en`.

## Examples
- `i18n("dog", "es")` transpiles to `"perro"`
- `i18n("dog")` transpiles to `"doggy"`
- `i18n("none", "?")` transpiles to `"none"`
  *(returns the original text because no translation was provided)*

and translations files must have a similar structure:
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

## FAQ
```bash
ReferenceError: i18n is not defined
```
Check your build folder. You should not see the 'i18n' function. Review your babel configuration.

```bash
TS2304: Cannot find name 'i18n'
```
You should `declare var i18n: any;`
