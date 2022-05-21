import tester from '../util/tester.js';
import conditioner from './conditioner.js';

const testCases = [
  {
    input: 22,
    output: 'on',
  },
  {
    input: 20,
    output: 'off',
  },
  {
    input: 3,
    output: 'off',
  },
  {
    input: 100,
    output: 'on',
  },
];
tester(testCases, conditioner, 'Conditioner', true);
