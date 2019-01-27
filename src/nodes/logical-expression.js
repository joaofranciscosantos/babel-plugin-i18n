module.exports = (target, args, dictionary, lang, operations) => {
  const operator = args[0].operator;
  const leftNode = operations(target, [args[0].left], dictionary, lang, operations);
  const rightNode = operations(target, [args[0].right], dictionary, lang, operations);
  switch (operator) {
    case '&&':
      return leftNode && rightNode;
    case '||':
      return leftNode || rightNode;
  }
};
