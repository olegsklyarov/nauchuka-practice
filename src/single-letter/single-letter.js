export default function getUniqueLetter(string) {
  // const symbols = string.split(' ').join('').split('');
  // return symbols.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))[0];
  const d = {};
  for (let i = 0; i < string.length; i++) {
    if (!(string[i] in d)) {
      d[string[i]] = 0;
    }
    d[string[i]]++;
  }
  for (const [key, value] of Object.entries(d)) {
    if (value === 1) {
      return key;
    }
  }
  return undefined;
}
// console.log(getUniqueLetter(`Лапу Азораaaa`))
