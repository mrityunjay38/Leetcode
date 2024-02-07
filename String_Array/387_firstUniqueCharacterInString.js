/**
 * Problem: 387 https://leetcode.com/problems/first-unique-character-in-a-string/
 */

/**
 * Solution: T=O(N), S=O(1)
 * 1. Maintain frequency count in ordered Map/Hashmap
 * 2. Return first character with freq = 1
 */

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  const hash = new Map();

  for (let i = 0; i < s.length; i++) {
    hash.has(s[i])
      ? hash.set(s[i], [hash.get(s[i])[0] + 1, i])
      : hash.set(s[i], [1, i]);
  }

  let ans = -1;
  for (let [key, [value, index]] of hash) {
    if (value > 1) continue;
    else {
      ans = index;
      break;
    }
  }

  return ans;
};
