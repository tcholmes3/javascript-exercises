const removeFromArray = (arr, ...args) => arr.filter((x) => !args.includes(x));

module.exports = removeFromArray;