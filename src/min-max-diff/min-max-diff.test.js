'use strict';

describe(`Задача Min Max Diff`, () => {
  const maxArrayToDisplay = 10;
  const testCases = [
    { array: [2020, 1945], minMaxDiff: 75 },
    { array: [], minMaxDiff: undefined },
    { array: [2020], minMaxDiff: 0 },
    { array: [28, 34, -37, -18, -57, -47, 35, -30, 96], minMaxDiff: 153 },
    { array: [100, 0, 1], minMaxDiff: 100 },
    { array: [0, 1, 100], minMaxDiff: 100 },
  ];
  for (const testCase of testCases) {
    const expectedResult = testCase.minMaxDiff;
    const actualResult = window.minMaxDiff(testCase.array);
    const shortArray = testCase.array.length > maxArrayToDisplay
      ? `${testCase.array.slice(0, maxArrayToDisplay)}, ...`
      : `${testCase.array}`;
    const description = `minMaxDiff(${shortArray}) = ${testCase.minMaxDiff}`;
    it(description,
      () => chai.assert.equal(actualResult, expectedResult, description));
  }
});
