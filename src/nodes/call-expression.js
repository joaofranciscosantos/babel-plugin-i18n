module.exports = ({target, args, dictionary, lang, operations}) => {
  const inputType = args && args[0] && args[0].type;
  if (inputType === 'CallExpression') {
    const calleeName = args[0].callee.name
    if (calleeName === target) {
      return {value: `${target}(${operations({args: args[0].arguments, dictionary, lang, operations})})`};
    }
  }
  return {};
};
