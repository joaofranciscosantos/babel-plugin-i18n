const nodes = {
  'StringLiteral': require('./nodes/string-literal'),
  'TemplateLiteral': require('./nodes/template-literal'),
  'TemplateElement': require('./nodes/template-element'),
  'NullLiteral': require('./nodes/null-literal'),
  'CallExpression': require('./nodes/call-expression')
};

const operations = (target, args, dictionary, lang, operations) => {
  const nodeType = args && args.type;
  const node = nodes[nodeType];
  return node ? node(target, args, dictionary, lang, operations) : 'null';
};

module.exports = (path, {target, language, dictionary}) => {
  if (path.node.callee.type === 'Identifier') {
    const calleeName = path.node.callee.name;
    const args = path.node.arguments;
    const lang = (args && args[1] && args[1].value) || language;
    if (calleeName === target) {
      const result = operations(target, args[0], dictionary, lang, operations);
      path.replaceWithSourceString(result);
    }
  }
};
