const nodes = {
  'Identifier': require('./nodes/literals/identifier'),
  'StringLiteral': require('./nodes/literals/string-literal'),
  'NumericLiteral': require('./nodes/literals/numeric-literal'),
  'NullLiteral': require('./nodes/literals/null-literal'),
  'UnaryExpression': require('./nodes/unary-expression'),
  'BinaryExpression': require('./nodes/binary-expression'),
  'ArrayExpression': require('./nodes/array-expression'),
  'NewExpression': require('./nodes/object-expression'),
  'ClassExpression': require('./nodes/class-expression'),
  'CallExpression': require('./nodes/call-expression')
};

const operations = (target, args, dictionary, lang, operations) => {
  const nodeType = args && args[0] && args[0].type;
  const node = nodes[nodeType];
  return node ? node(target, args, dictionary, lang, operations) : 'undefined';
};

module.exports = (path, {target, language, dictionary}) => {
  if (path.node.callee.type === 'Identifier') {
    const calleeName = path.node.callee.name;
    const args = path.node.arguments;
    if (calleeName === target) {
      const lang = (args && args[1] && args[1].value) || language;
      const result = operations(target, args, dictionary, lang, operations);
      path.replaceWithSourceString(result);
      return;
    }
  }
};
