const generateTaskTestJs = (taskName, taskTitle, taskCamelCase) => `import tester from '../util/tester.js';
import ${taskCamelCase} from './${taskName}.js';

const testCases = [
  {
    input: [],
    output: [],
  },
];
tester(testCases, ${taskCamelCase}, '${taskTitle}', true);
`;

export default generateTaskTestJs;
