[![GitHub version](https://badge.fury.io/gh/joaofranciscosantos%2Fbabel-plugin-i18n.svg)](https://badge.fury.io/gh/joaofranciscosantos%2Fbabel-plugin-i18n)
[![npm version](https://badge.fury.io/js/%40joaofranciscosantos%2Fbabel-plugin-i18n.svg)](https://badge.fury.io/js/%40joaofranciscosantos%2Fbabel-plugin-i18n)
![](https://img.shields.io/github/license/joaofranciscosantos/babel-plugin-i18n.svg)
[![dependencies Status](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n/status.svg)](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n)
[![devDependencies Status](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n/dev-status.svg)](https://david-dm.org/joaofranciscosantos/babel-plugin-i18n?type=dev)
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
`source` the location of dictionary file. Defaults to `/.dictionary.json`.

`target` function that is going to do the translation. Defaults to `i18n`. 

`language` set a language. Defaults to `en`.
```json
{
  "plugins": [["@joaofranciscosantos/babel-plugin-i18n", {"language": "pt"}]]
}
```
### API
```
i18n(expression, string)
```
`expression` javascript expression.

`string` (optional) overrides the language set by plugin.

### Dictionary
```json
{
  "keyword": {
    "language": "translation"
  },
  "water": {
    "en": "WateR",
    "pt": "água",
    "es": "agua"
  },
  "WaterR": {
  	"en": "more-water"
  }
}
```
### Examples
1. `i18n('water')` transpiles to `"WateR"`

2. `i18n('water', 'es')` transpiles to `"agua"`

3. `i18n("water"+"bolos", "es")` transpiles to `"aguabolos"`

4. `i18n(0 || "water")` transpiles to `"WateR"`

5. `i18n(true && i18n("water"))` transpiles to `"more-water"`

6. `i18n(0 && i18n("water"))` transpiles to `0`

7. `i18n({"it": "fire", "b": "3"})` transpiles to `undefined`

8. `i18n(["water", "3"])` transpiles to `["WateR", "3"]`

9. `[i18n("water"), "3"]` transpiles to `["WateR", "3"]`

10. `i18n([i18n("water"), "3"])` transpiles to `["more-water", "3"]`

11. `i18n(i18n(i18n("water")))` transpiles to `"WateR"`
## Tests
```bash
npm t
```
## Future Work
