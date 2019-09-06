const { executeTest } = require('..');

executeTest('i18n(`crocodile`, "pt")');
executeTest('i18n(`${"bear"}`, "pt")');
executeTest('i18n(` bear  `, "pt")');
executeTest('i18n(` pause!`)');
executeTest('i18n(`p ${"oi"} ! !`)');
