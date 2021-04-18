import tester from '../util/tester';
import digitsReverse from './digits-reverse';

const testCases = [
  {
    input: 2020,
    output: 202,
  },
  {
    input: 0,
    output: 0,
  },
  {
    input: 7,
    output: 7,
  },
  {
    input: 1945,
    output: 5491,
  },
  {
    input: 123456789,
    output: 987654321,
  },
  {
    input: 20200414,
    output: 41400202,
  },
  {
    input: 1000000,
    output: 1,
  },
  {
    input: 9007199254740991,
    output: 1990474529917009,
  },
];
tester(testCases, digitsReverse, 'DigitsReverse');
