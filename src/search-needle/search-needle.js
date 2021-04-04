 export default  function getNeedleNumber({ dictionary, needle }) {
  function checkIsNeedle(word) {
    return word.includes(needle);
  }
  let counter = 0;
  dictionary.forEach((word) => {
    if (checkIsNeedle(word, needle)) {
      counter++;
    }
  });
  return counter;
}

