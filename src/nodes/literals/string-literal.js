module.exports = ({args, dictionary, lang}) => {
  const value = args[0].value;
  const translations = dictionary[value];
  if (!translations) {
    return `"${value}"`;
  }
  return `"${translations[lang]}"`;
};
