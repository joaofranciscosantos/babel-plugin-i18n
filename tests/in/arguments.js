const { transpile } = require('..');

transpile('i18n("bolos", null)');
transpile('i18n("bolos", {})');
transpile('i18n("bolos", ()=>{})');
transpile('i18n("bolos", "pt")');
transpile('i18n("bolos", "")');
transpile('benfas("nadar")');
transpile('sporting("nadar")');
transpile('sporting("nadar")', { target: 'sporting' });
transpile('rafa("nadar", "pt")', { target: 'rafa' });
transpile('i18n("nadar")', { language: 'pt' });
transpile('i18n("nadar")', { language: 'not' });
transpile('i18n("nadar", "it")', { language: 'pt' });
transpile('oi("nadar")', { language: 'pt', target: 'oi' });
transpile('oi("nadar", "en")', { language: 'pt', target: 'oi'});
transpile('i18n("bolos")', { language: undefined, target: undefined});
