const { transpile } = require('..');

transpile('i18n(["nadar", "bolos"])');
transpile('[i18n("bolos"), "3"]');
transpile('i18n([i18n("bolos"), "3"])');
transpile('i18n([i18n("bolos"), "bolos"])');
transpile('i18n(["bolos", 0, -1, 1])');
transpile('i18n(["3", 0, -1, 1, true, , false])');
transpile('i18n([1, null, undefined, 0, "null", "undefined"])');
transpile('const a = "bolos"; i18n([a])');
transpile('i18n([`123`, new String("bolos"), () => { return "nadar"; }])');
transpile('i18n(["-1", function oi () { return "bolos"; }])');
transpile('i18n([1.23, class oi {}, 1.9 ])');
transpile('[{ a: i18n("bolos"), b: 123 }, { a: "" }]');
transpile('i18n([{a: "bolos", b: 123}, { a: "" }])');
transpile('i18n([{en: "bolos", b: 123}, { "a": "1" }])');
transpile('i18n([{a: i18n("bolos"), b: 123}, { a: {} }])');
