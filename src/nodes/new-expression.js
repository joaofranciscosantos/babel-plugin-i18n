module.exports = (target, args, dictionary, lang, operations) => {
  const inputArgs = args[0].arguments;
  return operations(target, inputArgs, dictionary, lang, operations);
};
