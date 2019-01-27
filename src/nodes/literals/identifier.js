module.exports = (target, args, dictionary, lang, operations) => {
  const name = args[0].name;
  return `(n => {try { return (${JSON.stringify(dictionary)}[n][${lang}]).toString(); } catch(e) { return undefined;}})(${name})`;
};
