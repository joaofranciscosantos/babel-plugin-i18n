const { transpile } = require('..');

transpile('i18n("bear", null)');
transpile('i18n("bolos", {})');
transpile('i18n("bolos", ()=>{})');
transpile('i18n("bear", "pt")');
transpile('i18n("bear", "")');
transpile('benfas("bear")');
transpile('sporting("bear")');
transpile('sporting("bear")', { target: 'sporting' });
transpile('rafa("bear", "pt")', { target: 'rafa' });
transpile('i18n("bear")', { language: 'pt' });
transpile('i18n("bear")', { language: 'not' });
transpile('i18n("dog", "it")', { language: 'pt' });
transpile('oi("bear")', { language: 'pt', target: 'oi' });
transpile('oi("bear", "en")', { language: 'pt', target: 'oi'});
transpile('i18n("bear")', { language: undefined, target: undefined});
