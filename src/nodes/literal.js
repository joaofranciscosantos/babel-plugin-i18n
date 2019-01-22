module.exports = ({args, dictionary, lang}) => {
  const inputType = args && args[0] && args[0].type;
  if (inputType === 'StringLiteral') {
    const value = args[0].value;
    const translations = dictionary[value];
    if (!translations) {
      return {value: `"${value}"`};
    }
    return {value: `"${translations[lang]}"`};
  }
  if (inputType === 'NumericLiteral') {
    const value = args[0].value;
    return {value: value};
  }
  if (inputType === 'NullLiteral') {
    return {value: null};
  }
  return {};
};
