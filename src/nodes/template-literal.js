module.exports = (target, args, dictionary, lang, operations) => {
  const expressions = args.expressions[0];
  let leftExpr = '';
  let expr = '';
  let rightExpr = '';
  args.quasis && args.quasis.forEach(el => {
    if (el.tail) {
      return rightExpr += operations(target, el, dictionary, lang, operations);
    }
    return leftExpr += operations(target, el, dictionary, lang, operations);
  });

  if (leftExpr) {
    expr += leftExpr.replace(/\"/g, '');
  }
  if (expressions) {
    expr += operations(target, expressions, dictionary, lang, operations).replace(/\"/g, '');
  }
  if (rightExpr) {
    expr += rightExpr.replace(/\"/g, '');
  }
  return `"${expr}"`;
};
