'use strict';

window.tester = (testCases, solver, solverName) => {
  testCases.forEach((testCase) => {
    const expectedResult = testCase.output;
    const actualResult = solver(testCase.input);
    const argument = typeof testCase.input === 'object'
      ? JSON.stringify(testCase.input)
      : testCase.input;
    const description = `${solverName}(${argument}) = ${testCase.output}`;
    it(description,
      () => chai.assert.equal(actualResult, expectedResult, description));
  });
};
