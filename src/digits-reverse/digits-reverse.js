export default function getDigitReverse(number) {
  let inputNumber = number;
  let reverseNumber = 0;
  while (inputNumber > 0) {
    const digit = inputNumber % 10;
    inputNumber = Math.floor(inputNumber / 10);
    reverseNumber *= 10;
    reverseNumber += digit;
  }
  return reverseNumber;
}



