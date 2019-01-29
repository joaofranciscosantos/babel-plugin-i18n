module.exports = (target, args, dictionary, lang, operations) => {
  const elements = args[0].elements;
  const result = elements.map(el => {
    let value = operations(target, [el], dictionary, lang, operations);
    if (value === 'undefined') {
     return value;
    }
    if (value === null) {
      return "null";
    }
    return value;
  });
  return `[${result}]`;
};
