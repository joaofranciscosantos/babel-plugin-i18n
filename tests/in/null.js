const { transform } = require('@babel/core');
const { options } = require('..');

console.log(transform('i18n()', options).code);
console.log(transform('i18n(null)', options).code);
console.log(transform('i18n(undefined)', options).code);
