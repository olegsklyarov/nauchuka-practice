import tester from '../util/tester';
import even from './even';

const testCases = [
  {
    input: [0, 8, 1, 1, 5, 13, 2, 3],
    output: 3,
  },
  {
    input: [],
    output: 0,
  },
  {
    input: [1],
    output: 0,
  },
  {
    input: [-78, 84, -79, 15, 3, -71, -24, 13, 100, 26, 62, 37, -34, 10, -66],
    output: 9,
  },
];
tester(testCases, even, 'Even');
