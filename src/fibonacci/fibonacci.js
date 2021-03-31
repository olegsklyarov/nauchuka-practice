export default  function getDigitByPosition (n) {
  const fibonacchiSequence = [];
  fibonacchiSequence.push(0, 1);
  let result;
 for (let i = 0; i <= 1000000; i++) {
  result = fibonacchiSequence[i] + fibonacchiSequence[i+1];
  fibonacchiSequence.push(result);
 }
 return fibonacchiSequence[n];
}

