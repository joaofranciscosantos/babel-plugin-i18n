module.exports = ({args, dictionary, lang, operations}) => {
  const elements = args[0].elements;
  const result = elements.map(el => operations({args: [el], dictionary, lang, operations}));
  return `[${result}]`;
};
