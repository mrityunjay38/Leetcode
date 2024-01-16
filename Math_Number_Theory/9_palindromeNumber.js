/**
 * Problem: 9 https://leetcode.com/problems/palindrome-number
 */

/**
 * Solution:
 * 1. Divide and reverse number to compare x with _x.
 * 2. Check reversed half with the other half.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let tempX = x;
  let _x = 0;

  while (tempX > 0) {
    _x *= 10;
    _x += tempX % 10;

    tempX = parseInt(tempX / 10);
  }

  return x === _x ? true : false;
};
