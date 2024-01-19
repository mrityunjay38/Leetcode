/**
 * Problem: 796 https://leetcode.com/problems/rotate-string/
 * Note: O(N) solution require KMP Algo, hence level: Medium
 */

/**
 * Solution 1: Simple rotate on each iteration and compare, T=O(N^2).
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  for (let i = 0; i < s.length; i++) {
    s = s.slice(1) + s[0];
    if (s === goal) return true;
  }

  return false;
};

/**
 * Solution 2: Add string + string and find goal inside combined string, T=O(N^2);
 */

var rotateString = function (s, goal) {
  return s.length !== goal.length ? false : (s + s).includes(goal);
};
