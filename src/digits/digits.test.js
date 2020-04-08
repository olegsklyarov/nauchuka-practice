'use strict';

describe('Задача Digits', () => {
  const testCases = [
    { n: 0, d: 1 },
    { n: 6, d: 1 },
    { n: 10, d: 2 },
    { n: -1, d: 1 },
    { n: 123, d: 3 },
    { n: 1988, d: 4 },
    { n: -2500, d: 4 },
    { n: 100000001, d: 9 },
    { n: -10000000000, d: 11 },
    { n: 99999999, d: 8 },
  ];
  for (const testCase of testCases) {
    const expectedResult = testCase.d;
    const actualResult = digits(testCase.n);
    const description = `${testCase.n} содержит ${expectedResult} цифр`;
    it(description,
      () => chai.assert.equal(actualResult, expectedResult, description));
  }
});
