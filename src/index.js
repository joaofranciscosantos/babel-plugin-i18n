const nodes = {
  'Identifier': require('./nodes/literals/identifier'),
  'StringLiteral': require('./nodes/literals/string-literal'),
  'TemplateLiteral': require('./nodes/literals/template-literal'),
  'TemplateElement': require('./nodes/literals/template-element'),
  'NumericLiteral': require('./nodes/literals/numeric-literal'),
  'BooleanLiteral': require('./nodes/literals/boolean-literal'),
  'NullLiteral': require('./nodes/literals/null-literal'),
  'LogicalExpression': require('./nodes/logical-expression'),
  'UnaryExpression': require('./nodes/unary-expression'),
  'BinaryExpression': require('./nodes/binary-expression'),
  'ArrayExpression': require('./nodes/array-expression'),
  'NewExpression': require('./nodes/new-expression'),
  'ConditionalExpression': require('./nodes/condicional-expression'),
  'ClassExpression': require('./nodes/class-expression'),
  'ObjectExpression': require('./nodes/object-expression'),
  'ObjectProperty': require('./nodes/object-property'),
  'CallExpression': require('./nodes/call-expression')
};

const operations = (target, args, dictionary, lang, operations) => {
  const nodeType = args && args[0] && args[0].type;
  const node = nodes[nodeType];
  return node ? node(target, args, dictionary, lang, operations) : 'undefined';
};

const isIdentifierFirstArg = (path, args, lang) => {
  const {type, name} = args || {};
  if (type === 'Identifier') {
    if (name === 'undefined') {
      path.replaceWithSourceString(name);
      return true;
    }
    path.replaceWithSourceString(`${name}["${lang}"]`);
    return true;
  }
  return false;
}

module.exports = (path, {target, language, dictionary}) => {
  if (path.node.callee.type === 'Identifier') {
    const calleeName = path.node.callee.name;
    const args = path.node.arguments;
    if (calleeName === target) {
      const lang = (args && args[1] && args[1].value) || language;
      if (!isIdentifierFirstArg(path, args[0], lang)) {
        const result = operations(target, [args[0]], dictionary, lang, operations);
        path.replaceWithSourceString(result);
        return;
      }
    }
  }
};
