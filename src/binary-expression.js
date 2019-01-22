module.exports = ({args, dictionary, lang, operations}) => {
  const inputType = args && args[0] && args[0].type;
  if (inputType === 'BinaryExpression') {
    const leftType = args[0].left.type;
    const leftValue = args[0].left.value;
    const operator = args[0].operator;
    const rightType = args[0].right.type;
    const rightValue = args[0].right.value;
    if (operator === '+' && (leftType === 'StringLiteral' || rightType === 'StringLiteral')) {
      const binaryExpr = `${leftValue}${rightValue}`;
      if (dictionary[binaryExpr] === undefined || dictionary[binaryExpr][lang] === undefined) {
        return { value: `"${binaryExpr}"`};
      }
      return { value: `"${dictionary[binaryExpr][lang]}"`};
    }
  }
  return {};
};
