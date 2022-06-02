import tester from '../util/tester.js';
import conditionerHumidity from './conditioner-humidity.js';

const testCases = [
  {
    input: { T: 20, t: 22, h: 60 },
    output: 'on',
  },
  {
    input: { T: 20, t: 21, h: 80 },
    output: 'on',
  },
  {
    input: { T: 20, t: 21, h: 81 },
    output: 'off',
  },
  {
    input: { T: 30, t: 31, h: 80 },
    output: 'on',
  },
  {
    input: { T: 10, t: 11, h: 80 },
    output: 'on',
  },
];
tester(testCases, conditionerHumidity, 'Conditioner Humidity', true);
