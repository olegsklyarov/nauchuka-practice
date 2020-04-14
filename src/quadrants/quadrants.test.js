'use strict';

describe('Задача Quadrants', () => {
  const testCases = [
    {
      input: { x: 1, y: 1 },
      output: 1,
    },
    {
      input: { x: -1, y: 1 },
      output: 2,
    },
    {
      input: { x: -1, y: -1 },
      output: 3,
    },
    {
      input: { x: 1, y: -1 },
      output: 4,
    },
    {
      input: { x: 0, y: 0 },
      output: 0,
    },
    {
      input: { x: 0, y: 1 },
      output: 0,
    },
    {
      input: { x: 0, y: -1 },
      output: 0,
    },
    {
      input: { x: 1, y: 0 },
      output: 0,
    },
    {
      input: { x: -1, y: 0 },
      output: 0,
    },
  ];
  window.tester(testCases, window.quadrants, 'Quadrants');
});
