module.exports = (target, args, dictionary, lang, operations) => {
  if (args.callee.name === target) {
    return `${target}(${operations(target, args.arguments[0], dictionary, lang, operations)})`;
  }
};
