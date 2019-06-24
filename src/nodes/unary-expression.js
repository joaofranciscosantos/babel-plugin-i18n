module.exports = (target, args, dictionary, lang, operations) => {
  const operator = args.operator;
  const prefix = args.prefix;
  const argument = operations(target, args.argument, dictionary, lang, operations);
  switch (operator) {
    case '!':
      return !argument;
    case '-':
      return -argument;
    case '+':
      return +argument;
  }
};
