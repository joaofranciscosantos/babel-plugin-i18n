const { transpile } = require('..');

transpile('i18n(0)');
transpile('i18n(1000)');
transpile('i18n(-1)');
transpile('i18n(+1)');
transpile('i18n(+(-1))');
transpile('i18n(-(-1))');
