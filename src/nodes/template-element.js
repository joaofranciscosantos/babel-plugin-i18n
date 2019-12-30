const stringNode = require('./string-literal');

module.exports = (target, args, dictionary, lang) => {
  const value = args.value.cooked;
  return stringNode(target, {value}, dictionary, lang);
};
