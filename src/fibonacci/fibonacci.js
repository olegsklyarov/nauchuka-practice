export default  function getDigitByPosition (n) {
  const fibonacchiSequence = [];
  fibonacchiSequence.push(0, 1);
  let result;
 for (let i = 0; i <= n; i++) {
  result = fibonacchiSequence[i] + fibonacchiSequence[i+1];
  fibonacchiSequence.push(result);
 }
 return fibonacchiSequence[n];
}

//решить при помощи 3-х переменных

