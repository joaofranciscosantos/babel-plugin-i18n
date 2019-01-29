module.exports = (target, args, dictionary, lang, operations) => {
  const calleeName = args[0].callee.name;
  if (calleeName === target) {
    return `${target}(${operations(target, args[0].arguments, dictionary, lang, operations)})`;
  }
};
