/**
 * Problem: 1768 https://leetcode.com/problems/merge-strings-alternately
 */

/**
 * Solution: Merge Sort based conquer strategy O(n+m)
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  let i = 0,
    j = 0;
  let str = "";

  while (i < word1.length && j < word2.length) {
    str += word1[i];
    str += word2[j];
    i++;
    j++;
  }

  while (i < word1.length) {
    str += word1[i];
    i++;
  }

  while (j < word2.length) {
    str += word2[j];
    j++;
  }

  return str;
};
