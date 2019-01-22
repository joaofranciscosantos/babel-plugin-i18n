module.exports = ({args, dictionary, lang, operations}) => {
  const inputType = args && args[0] && args[0].type;
  if (inputType === 'Identifier') {
    const name = args[0].name;
    if (name === 'undefined') {
      return {value: null};
    }
  }
  return {};
};
