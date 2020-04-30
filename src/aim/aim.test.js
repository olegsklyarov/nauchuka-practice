'use strict';

describe('Задача Aim', () => {
  const testCases = [];

  const t = (x, y, expectedScore) => {
    testCases.push({
      input: { x, y },
      output: expectedScore,
    });
  };

  const checkAxisPoints = (offset, expectedScore) => {
    t(offset, 0, expectedScore);
    t(0, offset, expectedScore);
    t(-offset, 0, expectedScore);
    t(0, -offset, expectedScore);
  };

  // 10 points
  t(0, 0, 10);
  t(0.6, 0.7, 10);
  t(-0.8, 0.5, 10);
  t(-0.9, -0.4, 10);
  t(0.7, -0.7, 10);

  // 9 points
  checkAxisPoints(1, 9);
  t(1.8, 0.8, 9);
  t(-1.5, 1, 9);
  t(-0.5, -1.9, 9);
  t(0.9, -0.5, 9);

  // 8 points
  checkAxisPoints(2, 8);
  t(2.9, 0.7, 8);
  t(-2, 1, 8);
  t(-2.5, -1.5, 8);
  t(1.5, -2.5, 8);

  // 7 points
  checkAxisPoints(3, 7);

  // 6 points
  checkAxisPoints(4, 6);

  // 5 points
  checkAxisPoints(5, 5);

  // 4 points
  checkAxisPoints(6, 4);

  // 3 points
  checkAxisPoints(7, 3);

  // 2 points
  checkAxisPoints(8, 2);

  // 1 point
  checkAxisPoints(9, 1);

  // 0 points
  checkAxisPoints(10, 0);
  t(100, 100, 0);

  // random tests
  t(8.66, 9.80, 0);
  t(6.71, 7.18, 1);
  t(8.43, 1.24, 2);
  t(2.69, 6.74, 3);
  t(0.99, 6.32, 4);
  t(1.83, 4.90, 5);
  t(0.67, 4.40, 6);
  t(1.32, 3.29, 7);
  t(2.11, 1.53, 8);
  t(0.94, 1.50, 9);
  t(0.61, 0.70, 10);

  window.tester(testCases, window.aim, 'Aim');
});
