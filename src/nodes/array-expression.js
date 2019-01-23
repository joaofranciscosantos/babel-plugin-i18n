module.exports = (target, args, dictionary, lang, operations) => {
  const elements = args[0].elements;
  const result = elements.map(el => operations(target, [el], dictionary, lang, operations));
  return `[${result}]`;
};
