'use strict';

describe(`Задача Palindrome`, () => {
  const testCases = [
    {
      input: `ABBA`,
      output: true,
    },
    {
      input: `топот`,
      output: true,
    },
    {
      input: `Nauchuka`,
      output: false,
    },
    {
      input: `Saippuakivikauppias`,
      output: true,
    },
    {
      input: `а роза упала на лапу Азора`,
      output: true,
    },
    {
      input: `Палиндром`,
      output: false,
    },
    {
      input: `Аргентина манит негра`,
      output: true,
    },
    {
      input: `12345678987654321`,
      output: true,
    },
    {
      input: `2020`,
      output: false,
    },
  ];
  window.tester(testCases, window.palindrome, `Palindrome`);
});
