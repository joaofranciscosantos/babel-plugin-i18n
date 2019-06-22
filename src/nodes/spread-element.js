module.exports = (target, args, dictionary, lang, operations) => {
  const argument = args[0].argument;
  return operations(target, [argument], dictionary, lang, operations);
};
