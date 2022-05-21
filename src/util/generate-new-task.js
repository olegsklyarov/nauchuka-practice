import { mkdirSync, openSync, closeSync } from 'fs';

if (process.argv.length !== 3) {
  process.stdout.write('Usage: npm run new-task <taskName>');
  process.exit(1);
}

const newTaskName = process.argv[2];

const newTaskFolder = `src/${newTaskName}`;
mkdirSync(newTaskFolder);
closeSync(openSync(`${newTaskFolder}/${newTaskName}.test.js`, 'w'));
closeSync(openSync(`${newTaskFolder}/${newTaskName}.js`, 'w'));
closeSync(openSync(`${newTaskFolder}/index.md`, 'w'));
