module.exports = arg => `(identifier => {
  switch (typeof identifier) {
    case 'boolean':
      return identifier + '.toString()';

    case 'number':
      return identifier + '.toString()';

    case 'string':
      return identifier;

    case 'object':
      return JSON.stringify(identifier) + '["en"]';
  }
})(${arg})`;
