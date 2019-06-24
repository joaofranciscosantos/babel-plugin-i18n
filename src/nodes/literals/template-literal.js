module.exports = (target, args, dictionary, lang, operations) => {
  const expressions = args.expressions[0];
  const quasis = args.quasis[0];
  let exprValue;
  if (expressions) {
    if (expressions.type === 'Identifier') {
      exprValue = operations(target, expressions, dictionary, lang, operations, true);
    } else {
      exprValue = operations(target, expressions, dictionary, lang, operations);
    }
  }

  let quasisValue;
  if (quasis) {
    quasisValue = operations(target, quasis, dictionary, lang, operations);
  }

  if (expressions && quasis.tail) {
    return `${exprValue} + ${quasisValue}`;
  } else if (expressions && !quasis.tail) {
    return `${quasisValue} + ${exprValue}`;
  } else {
    return quasisValue;
  }
};
