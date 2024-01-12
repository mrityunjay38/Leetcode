/**
 * Problem 392 https://leetcode.com/problems/is-subsequence/description/
 */

/**
 * Solution: T=O(n) Two pointer approach to keep a track of string S matches in sequence or not.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i >= s.length ? true : false;
};
