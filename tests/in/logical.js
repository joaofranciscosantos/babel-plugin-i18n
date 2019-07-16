const { transpile } = require('..');

transpile('i18n(true && false)');
transpile('i18n(false && 0)');
transpile('i18n(false || false)');
transpile('i18n(0 || true)');
transpile('i18n(true && i18n("bolos"))');
transpile('i18n(0 && i18n("nadar"))');
