const cleanString = arg => arg.replace(/"/g, '');

module.exports = (target, args, dictionary, lang, operations) => {
  const expressions = args.expressions[0];
  let leftExpr = '';
  let rightExpr = '';
  args.quasis && args.quasis.forEach(el => {
    if (el.tail) {
      return rightExpr += operations(target, el, dictionary, lang, operations);
    }
    return leftExpr += operations(target, el, dictionary, lang, operations);
  });

  let expr = '';
  if (leftExpr) {
    expr += leftExpr;
  }
  if (expressions) {
    expr += operations(target, expressions, dictionary, lang, operations);
  }
  if (rightExpr) {
    expr += rightExpr;
  }
  return `"${cleanString(expr)}"`;
};
