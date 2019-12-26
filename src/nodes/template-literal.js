const cleanString = arg => arg.replace(/"/g, '');

module.exports = (target, args, dictionary, lang, operations) => {
  let leftExpr = '';
  let rightExpr = '';
  args.quasis && args.quasis.forEach(expr => {
    if (expr.tail) {
      return rightExpr += operations(target, expr, dictionary, lang, operations);
    }
    return leftExpr += operations(target, expr, dictionary, lang, operations);
  });
  const expressions = args.expressions[0];
  const expr = expressions && operations(target, expressions, dictionary, lang, operations) || '';
  return `"${cleanString(leftExpr + expr + rightExpr)}"`;
};
