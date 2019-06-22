module.exports = (target, args, dictionary, lang, operations) => {
  const expressions = args[0].expressions;
  const quasis = args[0].quasis;
  let expr;
  if (expressions.length) {
    if(expressions[0].type === 'Identifier') {
      expr = operations(target, expressions, dictionary, lang, operations, true);
    } else {
      expr = operations(target, expressions, dictionary, lang, operations);
    }  }

  let qu;
  if (quasis.length) {
    qu = operations(target, args[0].quasis, dictionary, lang, operations);
  }

  if (quasis[0] && quasis[0].value) {
    if (!expr) {
      return `"${quasis[0].value.cooked}"`;
    } else if (quasis[0].tail) {
      return `"${expr}" + "${quasis[0].value.cooked}"`;
    } else {
      return `"${quasis[0].value.cooked}" + ${expr}`;
    }
  }
  if (quasis[1] && quasis[1].value) { //TODO
    return `"${quasis[0].value.cooked}" + ${expr} + "${quasis[1].value.cooked}"`;
  }
  return `"" + ${expr} + ""`;
};
//TODO improve
