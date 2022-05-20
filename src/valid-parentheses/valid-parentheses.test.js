import tester from '../util/tester.js';
import validParentheses from './valid-parentheses.js';

const testCases = [
  {
    input: '',
    output: true,
  },
  {
    input: '()[]{}',
    output: true,
  },
  {
    input: '((())){[[]]}',
    output: true,
  },
  {
    input: '{]',
    output: false,
  },
  {
    input: '((((())))))',
    output: false,
  },
  {
    input: '((((())))]',
    output: false,
  },
  {
    input: '[])',
    output: false,
  },
  {
    input: '[{()}]',
    output: true,
  },
  {
    input: '(',
    output: false,
  },
  {
    input: '(())()',
    output: true,
  },
];
tester(testCases, validParentheses, 'validParentheses');
