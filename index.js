const {readFileSync} = require('fs');
const {resolve} = require('path');

module.exports = (context, input = {}) => {
  const targetFilename = input.source || '.dictionary.json';
  const targetFunctionName = input.target || 'i18n';
  const targetLanguage = input.language || 'en';
  const dictionary = JSON.parse(readFileSync(resolve(targetFilename), 'utf8'));
  return {
    visitor: {
      CallExpression: {
        enter: path => {
          if (path.node.callee.type === 'Identifier') {
            const calleeName = path.node.callee.name.toLowerCase();
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
        }
      }
    }
  }
};
