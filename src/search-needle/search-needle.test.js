'use strict';

describe('Задача Search Needle', () => {
  const weekDays = [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',
  ];
  const testCases = [
    {
      input: { dictionary: weekDays, needle: 'е' },
      output: 4,
    },
    {
      input: { dictionary: weekDays, needle: 'ед' },
      output: 2,
    },
    {
      input: { dictionary: weekDays, needle: 'еде' },
      output: 1,
    },
    {
      input: { dictionary: weekDays, needle: 'ик' },
      output: 2,
    },
    {
      input: { dictionary: weekDays, needle: 'ф' },
      output: 0,
    },
  ];
  window.tester(testCases, window.searchNeedle, 'SearchNeedle');
});
