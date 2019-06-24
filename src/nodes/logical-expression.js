module.exports = (target, args, dictionary, lang, operations) => {
  const leftNode = operations(target, args.left, dictionary, lang, operations);
  const rightNode = operations(target, args.right, dictionary, lang, operations);
  switch (args.operator) {
    case '&&':
      return leftNode && rightNode;
    case '||':
      return leftNode || rightNode;
  }
};
