const { transpile } = require('..');

transpile('i18n(1+1)');
transpile('i18n("nadar"+"!!!")');
transpile('i18n("!"+"nadar"+"bolos"+"?", "pt")');
transpile('i18n("it"+"alia", "it")');
