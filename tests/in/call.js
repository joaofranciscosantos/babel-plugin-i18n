const { transpile } = require('..');

transpile('i18n(i18n("bear", "pt"), "!!")');
transpile('i18n(i18n("bear", "??"), "es")');
transpile('i18n(i18n("bear", "it"), "es")');
transpile('i18n((("dog")), "it")');
transpile('i18n(i18n("dog"), "es")');

