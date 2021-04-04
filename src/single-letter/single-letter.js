/*export default*/ function getUniqueLetter(string) {
  const symbols = string.split('');
  const store = symbols.reduce((acc, cur) => {
    !acc[cur] ? acc[cur] = 1 : acc[cur]++;
    return acc;
  }, {});
  return Object.keys(store).filter((key) => store[key] === 1)[0];
}
console.log(getUniqueLetter(`Лапу Азора`))