/**
 * Problem: 13 https://leetcode.com/problems/roman-to-integer/
 */

/**
 * Solution: T=O(N)
 * 1. Add if current is greater than next
 * 2. Subtract if current is less than next
 *
 * Example: MXCIV = 1094
 */

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let integer = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) integer -= map[s[i]];
    else integer += map[s[i]];
  }

  return integer;
};
