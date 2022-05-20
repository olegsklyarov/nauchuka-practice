const isOpen = (c) => '([{'.includes(c);

const pairs = {
  '(': ')',
  '[': ']',
  '{': '}',
};

export default (s) => {
  if (!s.length) return true;

  const stack = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const c of s) {
    if (isOpen(c)) {
      stack.push(c);
      // eslint-disable-next-line no-continue
      continue;
    }

    const last = stack.pop();

    if (pairs[last] !== c) {
      return false;
    }
  }

  return stack.length === 0;
};
