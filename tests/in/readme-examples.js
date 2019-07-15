const {join} = require('path');
const {transform} = require('@babel/core');
const plugin = require('../../index');

const source = join(__dirname, '..', '.dictionary.json');
const options = { retainLines: true, plugins: [plugin(null, {source})] };

console.log(transform('i18n("water")', options).code);
console.log(transform('i18n("water", "es")', options).code);
console.log(transform('i18n("water"+"bolos", "pt")', options).code);
console.log(transform('i18n(0 || "water")', options).code);
console.log(transform('i18n(true && i18n("water"))', options).code);
console.log(transform('i18n(0 && i18n("water"))', options).code);
console.log(transform('i18n({"it": "fire", "b": "3"})', options).code);
console.log(transform('i18n(["water", "3"])', options).code);
console.log(transform('[i18n("water"), "3"]', options).code);
console.log(transform('i18n([i18n("water"), "3"])', options).code);
console.log(transform('i18n(i18n(i18n("water")))', options).code);
