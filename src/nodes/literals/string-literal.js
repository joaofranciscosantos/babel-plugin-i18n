module.exports = (target, args, dictionary, lang, operations) => {
  const value = args[0].value;
  const translations = dictionary[value];
  if (!translations) {
    return `"${value}"`;
  }
  const translation = translations[lang];
  if (!translation) {
    return `"${value}"`
  }
  return `"${translation}"`;
};
