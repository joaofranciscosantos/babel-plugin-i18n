const { transpile } = require('..');

transpile('i18n((("dog")), "it")');
transpile('i18n(i18n("dog"), "es")');
transpile('i18n(i18n("dog", "es"), "es")');
transpile('i18n(i18n("dog", "es"), "??")');
transpile('i18n(i18n("dog", "??"), "es")');
transpile('i18n(!!"dog")');
