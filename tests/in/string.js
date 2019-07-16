const { transpile } = require('..');

transpile('i18n("bolos")');
transpile('i18n("bolos_ ")');
transpile("i18n('cu2')");
const randomKey = '__NOKEY_RANDOM__@_';
transpile(`i18n("${randomKey}")`);
