import chai from 'chai';
import chaiDeepCloseTo from 'chai-deep-closeto';

chai.use(chaiDeepCloseTo);

const MAX_LENGTH = 50;
const EPS = 1e-4;

export const OUTPUT_TYPE_FLOAT_ARRAY = 'output-type-float-array';

const formatValue = (value) => {
  const string = typeof value === 'object'
    ? JSON.stringify(value)
    : `${value}`;

  return string.length > MAX_LENGTH
    ? `${string.slice(0, MAX_LENGTH)}... (length = ${string.length})`
    : string;
};

export default function (testCases, solver, solverName, isSkip = false) {
  describe(`Задача ${solverName}`, () => {
    // eslint-disable-next-line func-names
    before(function () {
      if (isSkip) {
        this.skip();
      }
    });
    testCases.forEach((testCase) => {
      const argumentDescription = formatValue(testCase.input);
      const expectedResultDescription = formatValue(testCase.output);
      const description = `${solverName}(${argumentDescription}) = ${expectedResultDescription}`;
      const expectedResult = testCase.output;
      it(description, (done) => {
        const actualResult = solver(testCase.input);
        if (testCase.outputType === OUTPUT_TYPE_FLOAT_ARRAY) {
          chai.expect(actualResult).to.be.deep.closeTo(expectedResult, EPS);
          return done();
        }
        return done(chai.assert.deepEqual(actualResult, expectedResult, description));
      });
    });
  });
}
