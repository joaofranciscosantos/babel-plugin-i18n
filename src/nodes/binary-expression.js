module.exports = (target, args, dictionary, lang, operations) => {
  const left = operations(target, args.left, dictionary, lang, operations);
  const operator = args.operator;
  const right = operations(target, args.right, dictionary, lang, operations);
  let binaryExpr = [];
  if (typeof left === 'string') {
    binaryExpr = [...binaryExpr, ...left];
  } else {
    binaryExpr.push(left);
  }
  if (typeof right === 'string') {
    binaryExpr = [...binaryExpr, ...right];
  } else {
    binaryExpr.push(right);
  }
  for (let i = binaryExpr.length; i--;){
    if ( binaryExpr[i] === '"') binaryExpr.splice(i, 1);
  }

  if (typeof left === 'string' || typeof right === 'string') {
    switch (operator) {
      case '+':
        return `"${binaryExpr.join('')}"`;
    }
  }
  switch (operator) {
    case '+':
      return left + right;
  }
};
