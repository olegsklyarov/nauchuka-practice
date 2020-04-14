'use strict';

window.tester = (testCases, solver, solverName) => {
  testCases.forEach((testCase) => {
    const expectedResult = testCase.output;
    const actualResult = solver(testCase.input);
    const description = `${solverName}(${testCase.input}) = ${testCase.output}`;
    it(description,
      () => chai.assert.equal(actualResult, expectedResult, description));
  });
};
