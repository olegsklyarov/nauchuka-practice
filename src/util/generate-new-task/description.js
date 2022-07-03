import { toTitleCase } from './case-convert.js';

export default function (taskName) {
  const title = toTitleCase(taskName);
  return `# ${title}

TODO Insert task description here

### Входные данные

### Выходные данные

### Пример

| Выходные данные | Выходные данные |
|-----------------|-----------------|
|                 |                 |
`;
}
