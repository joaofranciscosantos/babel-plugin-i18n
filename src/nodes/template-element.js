const stringNode = require('./string-literal');

module.exports = (target, args, dictionary, lang, operations) => {
  const value = args.value.cooked;
  return stringNode(target, {value}, dictionary, lang, operations);
};
