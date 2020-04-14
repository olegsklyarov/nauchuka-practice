'use strict';

describe(`Задача Palindrome`, () => {
  const testCases = [
    { string: `ABBA`, isPalindrome: true },
    { string: `топот`, isPalindrome: true },
    { string: `Nauchuka`, isPalindrome: false },
    { string: `Saippuakivikauppias`, isPalindrome: true },
    { string: `а роза упала на лапу Азора`, isPalindrome: true },
    { string: `Палиндром`, isPalindrome: false },
    { string: `Аргентина манит негра`, isPalindrome: true },
    { string: `12345678987654321`, isPalindrome: true },
    { string: `2020`, isPalindrome: false },
  ];
  for (const testCase of testCases) {
    const expectedResult = testCase.isPalindrome;
    const actualResult = window.palindrome(testCase.string);
    const description = `${testCase.string} - ${testCase.isPalindrome ? `` : `не `}палиндром`;
    it(description,
      () => chai.assert.equal(actualResult, expectedResult, description));
  }
});
