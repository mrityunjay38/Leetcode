/**
 * Problem: 1119 https://leetcode.com/problems/remove-vowels-from-a-string/
 */

/**
 * Solution: T=O(N), S=O(1)
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
  let string = "";
  const vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    A: "A",
    E: "E",
    I: "I",
    O: "O",
    U: "U",
  };

  for (let i = 0; i < s.length; i++) if (!vowels[s[i]]) string += s[i];

  return string;
};
