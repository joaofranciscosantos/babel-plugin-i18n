const { transpile } = require('..');

transpile('const a = {"nadar": {"en": "puta"}}; const b = i18n(a);');
transpile('const a = {"nadar": {"en": "puta"}}; const b = i18n(a, "it");');
transpile('const a = 1; const b = i18n(a, "it");');
transpile('const a = [1,2,3]; const b = i18n(a);');
transpile('const a = null; const b = i18n(a, "it");');
