module.exports = (target, args, dictionary, lang, operations) => {
  const obj = {};
  args.properties.forEach(el => {
    const currentObj = operations(target, el, dictionary, lang, operations);
    const key = Object.keys(currentObj)[0];
    const value = currentObj[key];
    obj[key] = value;
  });
  if (obj && obj[lang]) {
    return `"${obj[lang]}"`;
  }
  return 'undefined';
};
