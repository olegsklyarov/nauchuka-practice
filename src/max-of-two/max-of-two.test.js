import tester from '../util/tester.js';
import maxOfTwo from './max-of-two.js';

const testCases = [
  {
    input: { a: 5, b: 7 },
    output: 7,
  },
  {
    input: { a: 10, b: -7 },
    output: 10,
  },
  {
    input: { a: 8, b: 8 },
    output: 'Равны',
  },
];
tester(testCases, maxOfTwo, 'MaxOfTwo', true);
