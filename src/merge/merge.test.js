import tester from '../util/tester';
import merge from './merge';

const testCases = [
  {
    input: {
      a: [],
      b: [],
    },
    output: [],
  },
  {
    input: {
      a: [1, 2, 3],
      b: [],
    },
    output: [1, 2, 3],
  },
  {
    input: {
      a: [],
      b: [1, 2, 3],
    },
    output: [1, 2, 3],
  },
  {
    input: {
      a: [1, 2, 3],
      b: [1, 2, 3],
    },
    output: [1, 1, 2, 2, 3, 3],
  },
  {
    input: {
      a: [4, 5, 6],
      b: [1, 2, 3],
    },
    output: [1, 2, 3, 4, 5, 6],
  },
  {
    input: {
      a: [1, 2, 3],
      b: [4, 5, 6],
    },
    output: [1, 2, 3, 4, 5, 6],
  },
  {
    input: {
      a: [1, 3, 5],
      b: [2, 4, 6],
    },
    output: [1, 2, 3, 4, 5, 6],
  },
  {
    input: {
      a: [2, 4, 6],
      b: [1, 3, 5],
    },
    output: [1, 2, 3, 4, 5, 6],
  },
  {
    input: {
      a: [1, 9, 10],
      b: [2, 3, 4],
    },
    output: [1, 2, 3, 4, 9, 10],
  },
  {
    input: {
      a: [2, 3, 4],
      b: [1, 9, 10],
    },
    output: [1, 2, 3, 4, 9, 10],
  },
];
tester(testCases, merge, 'Merge');
