import tester from '../util/tester';
import singleLetter from './single-letter';

const genUniqueCharSequence = (exceptChar) => {
  let result = '';
  for (let i = 32; i < 1024; i++) {
    const charFromCode = String.fromCharCode(i);
    if (charFromCode !== exceptChar) {
      result += String.fromCharCode(i);
    }
  }
  return result;
};

const testCases = [
  {
    input: 'test',
    output: 'e',
  },
  {
    input: '2020',
    output: undefined,
  },
  {
    input: 'Nauchuka',
    output: 'N',
  },
  {
    input: '',
    output: undefined,
  },
  {
    input: `${genUniqueCharSequence('A').repeat(100)}A`,
    output: 'A',
  },
  {
    input: `${genUniqueCharSequence().repeat(100)}`,
    output: undefined,
  },
];
tester(testCases, singleLetter, 'SingleLetter');
