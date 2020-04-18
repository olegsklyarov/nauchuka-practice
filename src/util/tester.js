'use strict';

window.tester = (testCases, solver, solverName) => {
  const MAX_LENGTH = 50;

  const formatValue = (value) => {
    const string = typeof value === 'object'
      ? JSON.stringify(value)
      : `${value}`;

    return string.length > MAX_LENGTH
      ? `${string.slice(0, MAX_LENGTH)}... (length = ${string.length})`
      : string;
  };

  testCases.forEach((testCase) => {
    const argumentDescription = formatValue(testCase.input);
    const expectedResultDescription = formatValue(testCase.output);
    const description = `${solverName}(${argumentDescription}) = ${expectedResultDescription}`;
    const expectedResult = testCase.output;
    it(description, (done) => {
      const actualResult = solver(testCase.input);
      done(chai.assert.deepEqual(actualResult, expectedResult, description));
    });
  });
};
