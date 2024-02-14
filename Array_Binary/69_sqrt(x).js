/**
 * Problem: 69 https://leetcode.com/problems/sqrtx/
 */

/**
 * Solution: T=O(log N)
 */

/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  const bs = (start, end) => {
    if (start > end) return end;
    const mid = start + Math.floor((end - start) / 2);
    if (mid * mid > x) return bs(start, mid - 1);
    else if (mid * mid < x) return bs(mid + 1, end);
    else return mid;
  };

  if (x < 2) return x;
  return bs(2, Math.floor(x / 2));
};
