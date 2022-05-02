export default function (string) {
  const isNumber = isNaN(string);

  if (!isNumber || !string) return undefined;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const firstIndex = string.indexOf(char);
    const lastIndex = string.lastIndexOf(char);

    if (firstIndex === lastIndex) return char;
  }

  return undefined;
}
