const { transpile } = require('..');

transpile('i18n(`nadar`)');
transpile('const a = "nadar"; i18n(`${a}`)');
transpile('const a = 18; i18n(`${a}`)');
transpile('const a = "nadar"; i18n(`${a}==`)');
transpile('const a = "nadar"; i18n(`!!${a}`)');
transpile('const a = "nadar"; i18n(` ? ${a} - `)');
transpile('const a = null; i18n(` ? ${a} - `)');
transpile('let a; i18n(` ? ${a} - `)');
transpile('let a; i18n(`${a}`)');
transpile('const a = true; i18n(` ? ${a} - `)');
transpile('const a = true; i18n(` ? ${a} - `)');
transpile('const a = {"nadar": {"en": "puta"}}; i18n(`${a} - `)');
transpile('i18n(` pause!`)');
