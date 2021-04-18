export default function checkPalindrom(string)
{
  const analyseStr = string.replace(/\s/g, '').toLowerCase();
  const symbols = analyseStr.split('');
  const tempSymbols = symbols.slice();
  const reverseSymbols = tempSymbols.reverse();
  let isPalindrom = false;
  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i] === reverseSymbols[i]) {
      isPalindrom = true;
    } else {
      isPalindrom = false;
      break;
    }
  }
  return isPalindrom;
}



