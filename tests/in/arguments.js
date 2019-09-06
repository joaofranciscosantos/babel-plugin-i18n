const { executeTest } = require('..');

executeTest('i18n("bear", null)');
executeTest('i18n("bolos", {})');
executeTest('i18n("bolos", ()=>{})');
executeTest('i18n("bear", "pt")');
executeTest('i18n("bear", "")');
executeTest('benfas("bear")');
executeTest('sporting("bear")');
executeTest('sporting("bear")', { target: 'sporting' });
executeTest('rafa("bear", "pt")', { target: 'rafa' });
executeTest('i18n("bear")', { language: 'pt' });
executeTest('i18n("bear")', { language: 'not' });
executeTest('i18n("dog", "it")', { language: 'pt' });
executeTest('oi("bear")', { language: 'pt', target: 'oi' });
executeTest('oi("bear", "en")', { language: 'pt', target: 'oi' });
executeTest('i18n("bear")', { language: undefined, target: undefined });
