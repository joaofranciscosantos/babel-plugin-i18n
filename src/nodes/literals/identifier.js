const identifierHelper = require('./identifier-helper');

module.exports = (target, args, dictionary, lang, operations, evaluate) => {
  const name = args.name;
  if (!evaluate || name === 'undefined') {
    return name;
  }
  return identifierHelper(name);
};
