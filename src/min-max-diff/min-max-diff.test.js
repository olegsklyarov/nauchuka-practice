import tester from '../util/tester';
import minMaxDiff from './min-max-diff';

const testCases = [
  {
    input: [2020, 1945],
    output: 75,
  },
  {
    input: [],
    output: undefined,
  },
  {
    input: [2020],
    output: 0,
  },
  {
    input: [28, 34, -37, -18, -57, -47, 35, -30, 96],
    output: 153,
  },
  {
    input: [100, 0, 1],
    output: 100,
  },
  {
    input: [0, 1, 100],
    output: 100,
  },
];
tester(testCases, minMaxDiff, 'MinMaxDiff');
