module.exports = (target, args, dictionary, lang, operations) => {
  const testCondition = args[0].test.value;
  const consequent = args[0].consequent;
  const alternate = args[0].alternate;
  if (testCondition) {
    return operations(target, [consequent], dictionary, lang, operations);
  }
  return operations(target, [alternate], dictionary, lang, operations);
};
