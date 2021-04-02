const cleanString = arg => arg.replace(/"/g, '');

module.exports = (target, args, dictionary, lang, operations) => {
  let result = '';
  args.quasis && args.quasis.forEach((expr, index) => {
    if (expr.tail) {
      return result += operations(target, expr, dictionary, lang, operations);
    }
    result += operations(target, expr, dictionary, lang, operations);
    result += operations(target, args.expressions[index], dictionary, lang, operations) || '';
  });
  return `"${cleanString(result)}"`;
};
