/**
 * Problem: 7 https://leetcode.com/problems/reverse-integer/
 */

/**
 * Solution: T=O(log(x)), since number is decreasing by log (base 10) (x)
 */

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let num = Math.abs(x);
  let rev = 0;

  while (num != 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  if (x < 0) {
    return (-rev).toString(2).length > 32 ? 0 : -rev;
  } else {
    return rev.toString(2).length > 31 ? 0 : rev;
  }
};
