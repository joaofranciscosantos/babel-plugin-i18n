module.exports = (target, args, dictionary, lang, operations) => {
  const expressions = args[0].expressions;
  if (expressions.length) {
    return operations(target, expressions, dictionary, lang, operations);
  }
  return operations(target, args[0].quasis, dictionary, lang, operations);
};
