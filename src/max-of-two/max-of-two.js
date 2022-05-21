export default function ({ a, b }) {
  if (a > b) {
    return a;
  } if (a < b) {
    return b;
  }
  return 'Равны';
}
