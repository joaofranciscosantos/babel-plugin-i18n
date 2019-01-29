module.exports = (target, args, dictionary, lang, operations) => {
  const properties = args[0].properties;
  const obj = {};
  properties.forEach(el => {
    const currentObj = operations(target, [el], dictionary, lang, operations);
    const key = Object.keys(currentObj)[0];
    const value = currentObj[key];
    obj[key] = value;
  });
  if (!Object.keys(obj).length) {
    return obj;
  } else if (obj[lang]) {
    return `"${obj[lang]}"`;
  }
};
