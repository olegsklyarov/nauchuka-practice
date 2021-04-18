import tester from '../util/tester';
import mapCoordinates from './map-coordinates';

const testCases = [
  {
    input: [0, 0, 640, 480],
    output: [-640, 480],
  },
  {
    input: [650, 450, 640, 480],
    output: [10, 30],
  },
  {
    input: [600, 500, 640, 480],
    output: [-40, -20],
  },
  {
    input: [0, 0, 0, 0],
    output: [0, 0],
  },
  {
    input: [10, -10, 10, -10],
    output: [0, 0],
  },
];
tester(testCases, mapCoordinates, 'MapCoordinates');
