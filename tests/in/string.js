const { executeTest } = require('..');

executeTest('i18n("null")');
executeTest('i18n("cão")');
executeTest('i18n("cão")');
executeTest('i18n("cão_ ")');
executeTest("i18n('cão')");
const randomKey = '__NOKEY_RANDOM__@_';
executeTest(`i18n("${randomKey}")`);
