const { transpile } = require('..');

transpile('i18n(`crocodile`, "pt")');
transpile('i18n(`${"bear"}`, "pt")');
transpile('i18n(` bear  `, "pt")');
transpile('i18n(` pause!`)');
transpile('i18n(`p ${"oi"} ! !`)');
