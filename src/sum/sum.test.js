'use strict';

describe('Задача Sum', () => {
    const testCases = [
        {a: 5, b: 7, s: 12},
        {a: -1, b: 1, s: 0},
        {a: 0, b: 0, s: 0},
        {a: 23234515, b: 3454132, s: 26688647},
    ];
    for (const testCase of testCases) {
        const expectedResult = testCase.s;
        const actualResult = sum(testCase.a, testCase.b);
        const description = `${testCase.a} + ${testCase.b} = ${expectedResult}`;
        it(description, () => chai.assert.equal(actualResult, expectedResult, description));
    }
});
