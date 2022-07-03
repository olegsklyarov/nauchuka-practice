import tester from '../util/tester.js';
import actors from './actors.js';

const testCases = [
  {
    input: [],
    output: [],
  },
];
tester(testCases, actors, 'Actors', true);
