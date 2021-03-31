export default  function getMaxValue(array) {
  let tempMax = array[0];
  for (let i = 0; i < array.length; i++) {
    tempMax < array[i + 1] ? tempMax = array[i+1] : tempMax;
  }
  return tempMax;
}

