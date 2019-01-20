module.exports = (path, {targetFunctionName, targetLanguage, dictionary}) => {
  if (path.node.callee.type === 'Identifier') {
    const calleeName = path.node.callee.name;
    const args = path.node.arguments;
    if (calleeName === targetFunctionName) {
      const keywordType = args && args[0] && args[0].type;
      const keyword = args && args[0] && args[0].value;
      const language = (args && args[1] && args[1].value) || targetLanguage;
      if ((keywordType !== 'StringLiteral') ||
        (dictionary[keyword] === undefined) ||
        (dictionary[keyword][language] === undefined)) {
        if (typeof keyword === 'string') {
          path.replaceWithSourceString(`"${keyword}"`);
          return;
        } else {
          path.replaceWithSourceString(keyword === undefined ? null : keyword);
          return;
        }
      }
      path.replaceWithSourceString(`"${dictionary[keyword][language]}"`);
    }
  }
};
