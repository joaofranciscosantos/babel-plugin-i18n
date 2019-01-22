module.exports = ({args, dictionary, lang, operations}) => {
  const inputType = args && args[0] && args[0].type;
  if (inputType === 'UnaryExpression') {
    const operator = args[0].operator;
    const value = args[0].argument.value;
    let unaryExpr;
    if (args[0].prefix) {
      unaryExpr = `${operator}${value}`;
    } else {
      unaryExpr = `${value}`;
    }
    return {value: unaryExpr};
  }

  return {};
};
