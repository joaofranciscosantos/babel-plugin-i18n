module.exports = (target, args, dictionary, lang, operations) => {
  const operator = args[0].operator;
  const prefix = args[0].prefix;
  const argument = operations(target, [args[0].argument], dictionary, lang, operations);
  if (prefix) {
    switch (operator) {
      case '!':
        return !argument;
      case '++':
        return leftNode || rightNode;
    }
  }
  switch (operator) {
    case '++':
      return leftNode || rightNode;
  }
};
