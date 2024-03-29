# Actors

Требуется написать алгоритм, который принимает на вход список актеров и подсчитывает количество мужчин, родившихся в каждый год из входного списка.

### Входные данные

На вход вашей функции передается массив объектов, где каждый объект — это актер. У каждого актера есть ровно три свойства:
- `name` — имя актера;
- `gender` — пол актера (`'male'` или `'female'`);
- `birthday` — строка с датой рождения актера в формате ДДДД-ММ-ГГ (например `'2021-07-04'`).

### Выходные данные

Ваша функция должна вернуть объект, где ключ — это год рождения, а значение — это количество мужчин, родившихся в этот год. Указывать только те года, где количество родившихся мужчин больше нуля.

### Пример

| Выходные данные                                                   | Выходные данные |
|-------------------------------------------------------------------|-----------------|
| `{ name: 'Bill Murray', gender: 'male', birthday: '1950-09-21' }` | `{ 1950: 1}`    |
