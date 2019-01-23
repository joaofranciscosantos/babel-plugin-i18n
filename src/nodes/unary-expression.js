module.exports = (target, args, dictionary, lang, operations) => {
  const operator = args[0].operator;
  const value = args[0].argument.value;
  let unaryExpr;
  if (args[0].prefix) {
    unaryExpr = `${operator}${value}`;
  } else {
    unaryExpr = `${value}`;
  }
  return unaryExpr;
};
