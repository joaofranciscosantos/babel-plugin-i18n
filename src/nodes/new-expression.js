module.exports = (target, args, dictionary, lang, operations) => {
  return operations(target, args.arguments[0], dictionary, lang, operations);
};
