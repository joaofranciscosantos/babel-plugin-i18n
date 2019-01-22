module.exports = ({args, dictionary, lang, operations}) => {
  const inputType = args && args[0] && args[0].type;
  if (inputType === 'ClassExpression') {
    return {value: 'undefined'}
  }
  return {};
};
