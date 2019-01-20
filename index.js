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
        enter: (path) => {
          if (path.node.callee.type === 'Identifier') {
            const functionName = path.node.callee.name.toLowerCase();
            const arguments = path.node.arguments;
            if (functionName === targetFunctionName) {
              const keywordType = arguments && arguments[0] && arguments[0].type;
              const keyword = arguments && arguments[0] && arguments[0].value;
              const language = (arguments && arguments[1] && arguments[1].value) || targetLanguage;
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
