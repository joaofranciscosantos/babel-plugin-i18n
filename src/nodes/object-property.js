module.exports = (target, args, dictionary, lang, operations) => {
  let key = operations(target, args.key, dictionary, lang, operations);
  let value = operations(target, args.value, dictionary, lang, operations);
  if (typeof key === 'string' && key.startsWith('"')) {
    key = key.slice(1, -1);
  }
  if (typeof value === 'string' && value.startsWith('"')) {
    value = value.slice(1, -1);
  }
  return {[key]: value}
};
