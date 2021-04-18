export default  function getMaxValue(array) {
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }
  return maxValue;
}
