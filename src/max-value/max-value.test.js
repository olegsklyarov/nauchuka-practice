'use strict';

describe(`Задача Max Value`, () => {
  const maxArrayToDisplay = 10;
  const testCases = [
    { array: [0, 8, 1, 1, 5, 13, 2, 3], maxValue: 13 },
    { array: [], maxValue: undefined },
    { array: [0], maxValue: 0 },
    { array: [100, 1, 2], maxValue: 100 },
    { array: [1, 2, 100], maxValue: 100 },
    {
      array: [929, 7749, 9197, 7823, -3317, -9690, -5158, 8378, -6384, 513, 8031, 1468, 5589, -1466, -9598, 994, -7549, -751, -4302, 6129, -3722, -812, 6562, -7524, -4390, 2665, -5159, -2469, 6957, -3552, 7680, 5006, 9217, -818, 2300, -4675, -188, -3383, -5478, -8744, 1741, 4489, -7984, -5348, -3223, -3934, -6080, -5160, 5924, 1410],
      maxValue: 9217
    },
  ];
  for (const testCase of testCases) {
    const expectedResult = testCase.maxValue;
    const actualResult = window.maxValue(testCase.array);
    const shortArray = testCase.array.length > maxArrayToDisplay
      ? `${testCase.array.slice(0, maxArrayToDisplay)}, ...`
      : `${testCase.array}`;
    const description = `maxValue(${shortArray}) = ${testCase.maxValue}`;
    it(description,
      () => chai.assert.equal(actualResult, expectedResult, description));
  }
});
