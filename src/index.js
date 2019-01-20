const binaryExpression = require('./binary-expression');

module.exports = (path, {target, language, dictionary}) => {
  if (path.node.callee.type === 'Identifier') {
    const calleeName = path.node.callee.name;
    const args = path.node.arguments;
    if (calleeName === target) {
      const inputType = args && args[0] && args[0].type;
      const lang = (args && args[1] && args[1].value) || language;
      if (binaryExpression({path, inputType, args, dictionary, lang})) {
        return;
      }

      const keyword = args && args[0] && args[0].value;
      if ((inputType !== 'StringLiteral') ||
        (dictionary[keyword] === undefined) ||
        (dictionary[keyword][lang] === undefined)) {
        if (typeof keyword === 'string') {
          path.replaceWithSourceString(`"${keyword}"`);
          return;
        } else {
          path.replaceWithSourceString(keyword === undefined ? null : keyword);
          return;
        }
      }
      path.replaceWithSourceString(`"${dictionary[keyword][lang]}"`);
    }
  }
};
