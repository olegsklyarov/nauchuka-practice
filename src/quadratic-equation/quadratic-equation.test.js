import tester, { OUTPUT_TYPE_FLOAT_ARRAY } from '../util/tester.js';
import quadraticEquation from './quadratic-equation.js';

const testCases = [
  {
    input: { a: 1, b: 2, c: 1 },
    output: [-1],
    outputType: OUTPUT_TYPE_FLOAT_ARRAY,
  },
  {
    input: { a: 1, b: -6, c: 8 },
    output: [2, 4],
    outputType: OUTPUT_TYPE_FLOAT_ARRAY,
  },
  {
    input: { a: 2, b: 3, c: 4 },
    output: 'No solution',
  },
  {
    input: { a: 0, b: 0, c: 0 },
    output: 'Many',
  },
  {
    input: { a: 1, b: -1, c: -15 },
    output: [-3.40512, 4.40512],
    outputType: OUTPUT_TYPE_FLOAT_ARRAY,
  },
  {
    input: { a: 3.1415, b: 0, c: 0 },
    output: [0],
    outputType: OUTPUT_TYPE_FLOAT_ARRAY,
  },
  {
    input: { a: 1, b: 0, c: -10 },
    output: [-3.1622, 3.1622],
    outputType: OUTPUT_TYPE_FLOAT_ARRAY,
  },
  {
    input: { a: 0.45, b: 0, c: 0.5 },
    output: 'No solution',
  },
  {
    input: { a: 1, b: 3, c: 0 },
    output: [-3, 0],
    outputType: OUTPUT_TYPE_FLOAT_ARRAY,
  },
  {
    input: { a: -1, b: 3, c: 0 },
    output: [0, 3],
    outputType: OUTPUT_TYPE_FLOAT_ARRAY,
  },
];
tester(testCases, quadraticEquation, 'Quadratic Equation', true);
