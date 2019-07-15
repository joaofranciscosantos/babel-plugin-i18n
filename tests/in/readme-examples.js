const { transform } = require('@babel/core');
const { options } = require('..');

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
