module.exports = ({args, dictionary, lang, operations}) => {
  const inputArgs = args[0].arguments;
  return operations({args: inputArgs, dictionary, lang, operations});
};
