'use strict';

describe('Задача Quadrants', () => {
  const testCases = [
    { x: 1, y: 1, q: 1 },
    { x: -1, y: 1, q: 2 },
    { x: -1, y: -1, q: 3 },
    { x: 1, y: -1, q: 4 },
    { x: 0, y: 0, q: 0 },
    { x: 0, y: 1, q: 0 },
    { x: 0, y: -1, q: 0 },
    { x: 1, y: 0, q: 0 },
    { x: -1, y: 0, q: 0 },
  ];
  for (const testCase of testCases) {
    const expectedResult = testCase.q;
    const actualResult = window.quadrants(testCase.x, testCase.y);
    const description = `(${testCase.x}, ${testCase.y}) находится в ${expectedResult} квадранте`;
    it(description,
      () => chai.assert.equal(actualResult, expectedResult, description));
  }
});
