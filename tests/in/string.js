const { transpile } = require('..');

transpile('i18n("null")');
transpile('i18n("cão")');
transpile('i18n("cão")');
transpile('i18n("cão_ ")');
transpile("i18n('cão')");
const randomKey = '__NOKEY_RANDOM__@_';
transpile(`i18n("${randomKey}")`);
