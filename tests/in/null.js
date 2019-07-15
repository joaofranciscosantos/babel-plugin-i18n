const {join} = require('path');
const {transform} = require('@babel/core');
const plugin = require('../../index');

const source = join(__dirname, '..', '.dictionary.json');
const options = { retainLines: true, plugins: [plugin(null, {source})] };

console.log(transform('i18n()', options).code);
console.log(transform('i18n(null)', options).code);
console.log(transform('i18n(undefined)', options).code);
