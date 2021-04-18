export default function getMinMaxDifValue(array) {
  let tempMax = array[0];
  let tempMin = array[0];
  for (let i = 0; i < array.length; i++) {
    tempMax < array[i + 1] ? tempMax = array[i + 1] : tempMax;
    tempMin > array[i + 1] ? tempMin = array[i + 1] : tempMin;
  }
  let diff;
  if (tempMax ==undefined) { diff = undefined;}
  else { diff = tempMax - tempMin };

  return diff;
}
