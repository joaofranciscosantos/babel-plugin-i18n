const unaryExpression = require('./unary-expression');
const binaryExpression = require('./binary-expression');
const arrayExpression = require('./array-expression');
const objectExpression = require('./object-expression');
const literal = require('./literal');
const identifier = require('./identifier');

const operations = ({args, dictionary, lang, operations}) => {
  const ops = [
    literal,
    identifier,
    unaryExpression,
    binaryExpression,
    objectExpression,
    arrayExpression
  ];
  for (const op of ops) {
    const value = op({args, dictionary, lang, operations}).value;
    if (value !== undefined) {
      return value;
    }
  }
};

const runner = (path, {target, language, dictionary}) => {
  if (path.node.callee.type === 'Identifier') {
    const calleeName = path.node.callee.name;
    const args = path.node.arguments;
    if (calleeName === target) {
      const lang = (args && args[1] && args[1].value) || language;
      const value = operations({args, dictionary, lang, operations});
      if (value) {
        path.replaceWithSourceString(value);
        return;
      }
    }
  }
};

module.exports = {runner};
