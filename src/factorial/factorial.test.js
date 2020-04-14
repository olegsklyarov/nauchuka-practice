'use strict';

describe('Задача Factorial', () => {
  const testCases = [
    {
      input: 0,
      output: 1,
    },
    {
      input: 1,
      output: 1,
    },
    {
      input: 2,
      output: 2,
    },
    {
      input: 3,
      output: 6,
    },
    {
      input: 5,
      output: 120,
    },
    {
      input: 18,
      output: 6402373705728000,
    },
  ];
  window.tester(testCases, window.factorial, `factorial`);
});
