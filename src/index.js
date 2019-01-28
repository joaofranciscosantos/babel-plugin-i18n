const nodes = {
  'Identifier': require('./nodes/literals/identifier'),
  'StringLiteral': require('./nodes/literals/string-literal'),
  'TemplateLiteral': require('./nodes/literals/template-literal'),
  'TemplateElement': require('./nodes/literals/template-element'),
  'NumericLiteral': require('./nodes/literals/numeric-literal'),
  'BooleanLiteral': require('./nodes/literals/boolean-literal'),
  'NullLiteral': require('./nodes/literals/null-literal'),
  'ThisExpression': require('./nodes/this-expression'),
  'LogicalExpression': require('./nodes/logical-expression'),
  'FunctionExpression': require('./nodes/function-expression'),
  'UnaryExpression': require('./nodes/unary-expression'),
  'BinaryExpression': require('./nodes/binary-expression'),
  'ArrayExpression': require('./nodes/array-expression'),
  'NewExpression': require('./nodes/object-expression'),
  'ConditionalExpression': require('./nodes/condicional-expression'),
  'ClassExpression': require('./nodes/class-expression'),
  'CallExpression': require('./nodes/call-expression')
};

const operations = (target, args, dictionary, lang, operations) => {
  const nodeType = args && args[0] && args[0].type;
  console.log(nodeType)
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
