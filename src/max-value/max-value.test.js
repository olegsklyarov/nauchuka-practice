import tester from '../util/tester';
import maxValue from './max-value';

const testCases = [
  {
    input: [0, 8, 1, 1, 5, 13, 2, 3],
    output: 13,
  },
  {
    input: [],
    output: undefined,
  },
  {
    input: [0],
    output: 0,
  },
  {
    input: [100, 1, 2],
    output: 100,
  },
  {
    input: [1, 2, 100],
    output: 100,
  },
  {
    input: [
      929,
      7749,
      9197,
      7823,
      -3317,
      -9690,
      -5158,
      8378,
      -6384,
      513,
      8031,
      1468,
      5589,
      -1466,
    ],
    output: 9197,
  },
];
tester(testCases, maxValue, 'MaxValue');
