const { transpile } = require('..');

transpile('i18n("water")');
transpile('i18n("water", "es")');
transpile('i18n("water"+"bolos", "pt")');
transpile('i18n(0 || "water")');
transpile('i18n(true && i18n("water"))');
transpile('i18n(0 && i18n("water"))');
transpile('i18n({"it": "fire", "b": "3"})');
transpile('i18n(["water", "3"])');
transpile('[i18n("water"), "3"]');
transpile('i18n([i18n("water"), "3"])');
transpile('i18n(i18n(i18n("water")))');
