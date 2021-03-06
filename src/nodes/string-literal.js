module.exports = (target, args, dictionary, lang) => {
  const value = args.value;
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
