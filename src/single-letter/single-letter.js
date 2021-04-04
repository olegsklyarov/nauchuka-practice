export default function getUniqueLetter(string) {
  const symbols = string.toLowerCase().split('');
  const repeatSymbols = [];
  for (let i = 0; i < symbols.length; i++) {
    let repeatCounter = 0;
    for (let m = 0; m < symbols.length; m++) {
      if (symbols[i] === symbols[m]) {
        repeatCounter++;
      }
      if (repeatCounter === 2) {
        repeatSymbols.filter((i) => repeatSymbols.indexOf(i) > 0);
        repeatSymbols.push(symbols[i]);
        repeatCounter = 0;
      }
    }
  }
  const uniqueSymbols = symbols.filter((i) => repeatSymbols.indexOf(i) < 0);
  return uniqueSymbols[0];
}
// console.log(getUniqueLetter(`Украина не будет участвовать в переговорах контактной группы, если Донецкая народная республика ДНР не исключит из своей делегации общественного эксперта, журналиста Майю Пирогову, заочно осужденную украинским судом за деятельность в структурах ДНРНесмотря на вступившие в силу с 1 февраля 2021 года поправки, направленные в том числе против распространения мата в интернете, меньше ненормативной лексики в сетях не стало.`))