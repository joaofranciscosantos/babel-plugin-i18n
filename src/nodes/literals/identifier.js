module.exports = (target, args, dictionary, lang, operations, evaluate) => {
  const name = args[0].name;
  if (name === "null" || name === "undefined" || name === null || name === undefined) {
    return name;
  }
  if (!evaluate) {
    return `"${args[0].name}"`
  }
  return `(identifier => {
    switch (typeof identifier) {
      case 'boolean':
        return identifier + '.toString()'
      case 'number':
        return identifier + '.toString()'
      case 'string':
        return identifier;
      case 'object':
        return JSON.stringify(identifier) + '["en"]';
      default:
        return undefined;
    }
  })(${args[0].name})`;
};
