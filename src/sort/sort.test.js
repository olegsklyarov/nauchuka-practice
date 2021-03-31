import tester from '../util/tester';
import sort from './sort';

const testCases = [
  {
    input: [],
    output: [],
  },
  {
    input: [2020],
    output: [2020],
  },
  {
    input: [0, 5, 3, 4, 3, 2, 1, 2],
    output: [0, 1, 2, 2, 3, 3, 4, 5],
  },
  {
    input: [100, 11, 1],
    output: [1, 11, 100],
  },
  {
    input: [-84, -48, -6, -24, -45, -31, 60, -28, -19, -57, 87, -69],
    output: [-84, -69, -57, -48, -45, -31, -28, -24, -19, -6, 60, 87],
  },
  {
    input: [
      -42423,
      -78855,
      -11006,
      -56899,
      93284,
      93067,
      9751,
      -5084,
      1042,
      88344,
      50223],
    output: [
      -78855,
      -56899,
      -42423,
      -11006,
      -5084,
      1042,
      9751,
      50223,
      88344,
      93067,
      93284],
  },
];
tester(testCases, sort, 'Sort');
