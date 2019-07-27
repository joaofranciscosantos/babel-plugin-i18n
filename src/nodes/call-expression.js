module.exports = (target, args, dictionary, lang, operations) => {
  if (args.callee.name === target) {
    const argLang = args.arguments[1] && args.arguments[1].value || lang;
    return `${target}(${operations(target, args.arguments[0], dictionary, argLang, operations)})`;
  }
};
