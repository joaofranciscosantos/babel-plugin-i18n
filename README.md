#babel-plugin-18n

Efficient String Translator

## How to use

### Setup

Install it:
```bash
npm install --save @joaofranciscosantos/babel-plugin-i18n
```
and add it to .babelrc as plugin:
```json
{
  "plugins": [
    ["@joaofranciscosantos/babel-plugin-i18n"]
  ]
}
```

### Plugin Options
source: Defaults to `.dictionary.json`. 
target: Defaults to `i18n`. 
language: Defaults to `en`.

```json
{
  "plugins": [
    ["@joaofranciscosantos/babel-plugin-i18n", { language: 'pt' }]
  ]
}
```
