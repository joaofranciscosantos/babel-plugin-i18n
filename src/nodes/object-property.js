module.exports = (target, args, dictionary, lang, operations) => {
  let key = operations(target, [args[0].key], dictionary, lang, operations);
  let value = operations(target, [args[0].value], dictionary, lang, operations);
  if (typeof key === 'string') {
    key = key.slice(1, -1);
  }
  if (typeof value === 'string') {
    value = value.slice(1, -1);
  }
  return {[key]: value}
};
