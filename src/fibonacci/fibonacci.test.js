// https://oeis.org/A000045
import tester from '../util/tester';
import fibonacci from './fibonacci';

const testCases = [
  {
    input: 0,
    output: 0,
  },
  {
    input: 1,
    output: 1,
  },
  {
    input: 2,
    output: 1,
  },
  {
    input: 3,
    output: 2,
  },
  {
    input: 4,
    output: 3,
  },
  {
    input: 5,
    output: 5,
  },
  {
    input: 6,
    output: 8,
  },
  {
    input: 7,
    output: 13,
  },
  {
    input: 50,
    output: 12586269025,
  },
  {
    input: 60,
    output: 1548008755920,
  },
];
tester(testCases, fibonacci, 'Fibonacci' );
