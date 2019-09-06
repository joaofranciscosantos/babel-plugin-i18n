const { executeTest } = require('..');

executeTest('i18n(i18n("bear", "pt"), "!!")');
executeTest('i18n(i18n("bear", "??"), "es")');
executeTest('i18n(i18n("bear", "it"), "es")');
executeTest('i18n((("dog")), "it")');
executeTest('i18n(i18n("dog"), "es")');

