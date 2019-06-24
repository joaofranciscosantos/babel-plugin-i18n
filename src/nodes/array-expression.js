module.exports = (target, args, dictionary, lang, operations) => {
  const result = args.elements.map(el => {
    const value = operations(target, el, dictionary, lang, operations);
    if (value === null) {
      return "null";
    }
    return value;
  });
  return `[${result}]`;
};
