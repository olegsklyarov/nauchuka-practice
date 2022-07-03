import {
  mkdirSync, openSync, writeSync, closeSync,
} from 'fs';
import generateIndexMd from './generate-index-md.js';
import generateTaskJs from './generate-task.js';
import generateTaskTestJs from './generate-task-test.js';
import { toTitleCase, toCamelCase } from '../case-convert.js';

if (process.argv.length !== 3) {
  process.stdout.write('Usage: npm run generate-new-task <taskName>');
  process.exit(1);
}

const newTaskName = process.argv[2];
const newTaskTitle = toTitleCase(newTaskName);
const newTaskCamelCase = toCamelCase(newTaskName);

const indexMdContent = generateIndexMd(newTaskTitle);
const taskJsContent = generateTaskJs();
const taskTestJsContent = generateTaskTestJs(newTaskName, newTaskTitle, newTaskCamelCase);

const newTaskFolder = `src/${newTaskName}`;
mkdirSync(newTaskFolder);

const taskTestJsFd = openSync(`${newTaskFolder}/${newTaskName}.test.js`, 'w');
writeSync(taskTestJsFd, taskTestJsContent);
closeSync(taskTestJsFd);

const taskJsFd = openSync(`${newTaskFolder}/${newTaskName}.js`, 'w');
writeSync(taskJsFd, taskJsContent);
closeSync(taskJsFd);

const indexMdFd = openSync(`${newTaskFolder}/index.md`, 'w');
writeSync(indexMdFd, indexMdContent);
closeSync(indexMdFd);
