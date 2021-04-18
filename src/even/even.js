export default function getEvensNumber(array) {
  let evenCounter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenCounter++;
    }
  }
  return evenCounter;
}

// console.log(getEvensNumber([1,2,6,0,-8,4/8]));
