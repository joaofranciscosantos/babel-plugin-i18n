module.exports = ({args, dictionary, lang, operations}) => {
  const inputType = args && args[0] && args[0].type;
  console.log(args)
  if (inputType === 'ArrayExpression') {
    const elements = args[0].elements;
    const result = elements.map(el => operations({args: [el], dictionary, lang, operations}));
    return {value: `[${result}]`};
  }
  return {};
};
