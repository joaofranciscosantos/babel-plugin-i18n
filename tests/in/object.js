const { transpile } = require('..');

transpile('i18n({"a": "bolas", "b": "3"})');
transpile('i18n({"en": "hello", "b": "3", "1": true, a: 1})');
transpile('i18n({it: "goy", "b": "3"}, "pt")');
transpile('i18n({it: "goy", "b": "3"}, "it")');
transpile('i18n(new String("bolos"))');
transpile('i18n(new String(i18n(new String("bolos"))))');
transpile('i18n(new String(new String("bolos")))');
transpile('i18n(new String("bolos"+"nadar"))');
