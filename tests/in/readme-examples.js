const { transpile } = require('..');

transpile('i18n("dog")');
transpile('i18n("dog", "es")');
transpile('i18n("do"+"g", "it")');
transpile('i18n(0 || "water")');
transpile('i18n(true && i18n("dog"))');
transpile('i18n(0 && i18n("dog", "pt"))');
transpile('i18n({"it": "fire"})');
transpile('i18n(["dog", "3"], "pt")');
transpile('[i18n("dog", "es"), "3"]');
transpile('i18n(i18n(i18n("dog", "it"), "??"), "pt")');
