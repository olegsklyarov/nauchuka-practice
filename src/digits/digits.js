export default function getDidgitsNum (number) {
  let counter = 1;
  number = Math.abs(number);
  while(number>=10) {
    number = number/10;
    counter++;
  }
  return counter;
}


