'use strict';

window.tester = (testCases, solver, solverName) => {
  testCases.forEach((testCase) => {
    const expectedResult = testCase.output;
    const actualResult = solver(testCase.input);
    const argumentDescription = typeof testCase.input === 'object'
      ? JSON.stringify(testCase.input)
      : testCase.input;

    const expectedResultDescriptoion = typeof testCase.output === 'object'
      ? JSON.stringify(testCase.output)
      : testCase.output;

    const description = `${solverName}(${argumentDescription}) = ${expectedResultDescriptoion}`;
    it(description,
      () => chai.assert.deepEqual(actualResult, expectedResult, description));
  });
};
