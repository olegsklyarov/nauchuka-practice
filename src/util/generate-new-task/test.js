import { toCamelCase, toTitleCase } from './case-convert.js';

export default function (taskName) {
  const title = toTitleCase(taskName);
  const camelCase = toCamelCase(taskName);
  return `import tester from '../util/tester.js';
import ${camelCase} from './${taskName}.js';

const testCases = [
  {
    input: [],
    output: [],
  },
];
tester(testCases, ${camelCase}, '${title}', true);
`;
}
