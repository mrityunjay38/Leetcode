/**
 * Problem: 202 https://leetcode.com/problems/happy-number/
 */

/**
 * @param {number} n
 * @return {boolean}
 */

/**
 * Solution:
 */

var isHappy = function (n, repetitionMap = {}) {
  if (repetitionMap[n]) {
    return false;
  } else repetitionMap[n] = true;

  let sum = 0;
  while (n) {
    sum += (n % 10) ** 2;
    n = parseInt(n / 10);
  }

  if (sum === 1) {
    return true;
  } else return isHappy(sum, repetitionMap);
};
