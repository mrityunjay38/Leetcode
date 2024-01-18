/**
 * Problem: 3 https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * Solution: Sliding window & Hashmap T=O(N)
 */

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let maxSubStr = "";
  let currSubStr = "";

  let i = 0;
  let map = new Map();

  while (i < s.length) {
    if (!map.has(s[i])) {
      currSubStr += s[i];
      map.set(s[i], i);
      i++;
    } else {
      maxSubStr = maxSubStr.length < currSubStr.length ? currSubStr : maxSubStr;
      i = map.get(s[i]) + 1;
      map.clear();
      currSubStr = "";
    }
  }

  maxSubStr = maxSubStr.length < currSubStr.length ? currSubStr : maxSubStr;

  return maxSubStr.length;
};
