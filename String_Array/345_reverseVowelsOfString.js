/**
 * Problem: 345 https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

/**
 * Solution: O(N)
 */

/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function (s) {
  s = s.split("");
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

  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (vowels[s[i]] && vowels[s[j]]) {
      [s[i], s[j]] = [s[j], s[i]];
      i++, j--;
    } else if (vowels[s[i]]) {
      j--;
    } else if (vowels[s[j]]) {
      i++;
    } else {
      i++, j--;
    }
  }

  return s.join("");
};
