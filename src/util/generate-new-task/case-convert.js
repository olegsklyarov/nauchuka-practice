const getWords = (taskName) => taskName
  .toLowerCase()
  .split('-');

const wordsToCamelCase = (words) => words
  .map((word) => word[0].toUpperCase() + word.slice(1));

export const toTitleCase = (taskName) => {
  const words = getWords(taskName);
  const camelCase = wordsToCamelCase(words);
  return camelCase.join(' ');
};

export const toCamelCase = (taskName) => {
  const words = getWords(taskName);
  const camelCase = [words[0], wordsToCamelCase(words.slice(1))];
  return camelCase.join('');
};
