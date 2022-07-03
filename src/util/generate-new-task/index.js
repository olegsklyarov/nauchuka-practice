import {
  mkdirSync, openSync, writeSync, closeSync,
} from 'fs';
import genDescription from './description.js';
import genSolution from './solution.js';
import genTest from './test.js';

if (process.argv.length !== 3) {
  process.stdout.write('Usage: npm run generate-new-task <taskName>');
  process.exit(1);
}

const newTaskName = process.argv[2];

const newTaskFolder = `src/${newTaskName}`;
mkdirSync(newTaskFolder);

const files = [
  {
    generator: genDescription, name: 'index.md',
  },
  {
    generator: genSolution, name: `${newTaskName}.js`,
  },
  {
    generator: genTest, name: `${newTaskName}.test.js`,
  },
];

files.forEach((file) => {
  const content = file.generator(newTaskName);
  const fd = openSync(`${newTaskFolder}/${file.name}`, 'w');
  writeSync(fd, content);
  closeSync(fd);
});
