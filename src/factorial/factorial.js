import tester from "../util/tester";


export default function getFactorial(n) {
  let result = 1;
  if (n <= 0) {
    return result;
  }
  for(let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}


