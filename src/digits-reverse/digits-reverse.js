export default function (number) {
  if (!number) return 0;

  let tempNumber = number;
  const arr = [];

  while (tempNumber >= 1) {
    const newIntNumber = tempNumber % 10;
    arr.push(newIntNumber);
    tempNumber = Math.trunc(tempNumber / 10);
  }

  return Number(arr.join(''));
}
