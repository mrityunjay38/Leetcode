/**
 * Problem: 316 https://leetcode.com/problems/remove-duplicate-letters/description/
 */

/**
 * Solution: T=O(N)
 * 1. Example: abcd < zoo
 * 2. Monotonic Increasing Stack: Left-to-Right / Next Smaller letter
 * 3. A letter in current monotonic stack should not be repeated, hence a Set to keep a track of unique character in the current lexicographic smallest substring
 * 4. Hash map to refer last occurance index of a character in the given string
 * 5. A letter smaller than the top of stack appearing again
 *
 * s = "cbacdcbc"
 *
 * c come --> ans -> c
 * b come ---> "c" also comes later on hence, can be removed to main lexicographic order
 * a come --> "b" also comes later
 * c come --> "a" is smaller ans = "ac"
 * d come ---> "c" is smaller ans = "acd"
 * c come --> "c" is already a part of current substring, hence skip
 * b come --> "d" is largest so far and not repeating in remaining string
 * So, ans = "acdb"
 * c come --> "c" is already a part of current substring, hence skip
 * So, ans = "acdb"
 */

/**
 * @param {string} s
 * @return {string}
 */

var removeDuplicateLetters = function (s) {
  const hash = {};
  const seen = new Set();
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) continue;
    while (
      stack.length > 0 &&
      s[i] < stack[stack.length - 1] &&
      hash[stack[stack.length - 1]] > i
    ) {
      seen.delete(stack.pop());
    }
    seen.add(s[i]);
    stack.push(s[i]);
  }

  return stack.join("");
};
