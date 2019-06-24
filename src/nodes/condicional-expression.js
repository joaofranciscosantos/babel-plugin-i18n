module.exports = (target, args, dictionary, lang, operations) => {
  const testCondition = args.test.value;
  const consequent = args.consequent;
  const alternate = args.alternate;
  if (testCondition) {
    return operations(target, consequent, dictionary, lang, operations);
  }
  return operations(target, alternate, dictionary, lang, operations);
};
