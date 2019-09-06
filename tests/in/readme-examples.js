const { executeTest } = require('..');

executeTest('i18n("dog")');
executeTest('i18n("dog", "es")');
executeTest('i18n("none", "?")');
