# babel-plugin-18n

Efficient Multi-Language Translator for Babel.

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
source: the location of dictionary file containing all translations. Defaults to `/.dictionary.json`. 
target: which function is going to do the translation. Defaults to `i18n`. 
language: set a language. Defaults to `en`.
```json
{
  "plugins": [["@joaofranciscosantos/babel-plugin-i18n", {"language": "pt"}]]
}
```

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
  }
}
```

### Template
```bash
i18n(expression[, string]); 
```
- expression: Returns translated expression.
- (optional) string: Overrides the language set by plugin.

##### Practical Examples
```bash
i18n('water') transpiles to "WateR"
```
```bash
i18n('water', 'es') transpiles to "agua"
```

### More Examples
```bash
1. i18n([123]) transpiles to [123]
```
```bash
2. i18n(["water"]) transpiles to ["WateR"]
```
(To continue...)

## Tests
```bash
npm t
```

## Future Work
