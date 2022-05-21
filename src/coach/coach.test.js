import tester from '../util/tester.js';
import coach from './coach.js';

const testCases = [
  {
    input: 1,
    output: 'first',
  },
  {
    input: 2,
    output: 'second',
  },
  {
    input: 3,
    output: 'first',
  },
  {
    input: 4,
    output: 'second',
  },
  {
    input: 5,
    output: 'first',
  },
  {
    input: 6,
    output: 'second',
  },
  {
    input: 3,
    output: 'first',
  },
  {
    input: 9007199254740990,
    output: 'second',
  },
  {
    input: 9007199254740991,
    output: 'first',
  },
];
tester(testCases, coach, 'Coach');
