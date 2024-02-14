/**
 * Problem: 367 https://leetcode.com/problems/valid-perfect-square/
 */

/**
 * Solution: T=O(log N), recursive straight forward binary search
 * 1. Similar to #69_sqrt(x)
 */

/**
 * @param {number} num
 * @return {boolean}
 */

var isPerfectSquare = function (num) {
  const bs = (left, right) => {
    if (left > right) return false;
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid > num) return bs(left, mid - 1);
    else if (mid * mid < num) return bs(mid + 1, right);
    else return true;
  };

  if (num < 2) return num;
  return bs(2, Math.floor(num / 2));
};
