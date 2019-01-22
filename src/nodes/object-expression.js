module.exports = ({args, dictionary, lang, operations}) => {
  const inputType = args && args[0] && args[0].type;
  if (inputType === 'NewExpression') {
    const inputArgs = args[0].arguments;
    return {value: operations({args: inputArgs, dictionary, lang, operations})};
  }
  return {};
};
