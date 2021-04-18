import tester from '../util/tester';
import digits from './digits';

const testCases = [
  {
    input: 0,
    output: 1,
  },
  {
    input: 10,
    output: 2,
  },
  {
    input: 2020,
    output: 4,
  },
  {
    input: -2500,
    output: 4,
  },
  {
    input: 9007199254740991,
    output: 16,
  },
];
tester(testCases, digits, 'Digits');
