/**
 * Problem: 1704
 */

/**
 * Solution: Simple two pointer approach to count vowels in T=O(1) hashmap lookup + T=O(n);
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = {
    a: "A",
    e: "E",
    i: "I",
    o: "O",
    u: "U",
    A: "a",
    E: "E",
    I: "i",
    O: "o",
    U: "u",
  };

  let i = 0,
    countA = 0,
    countB = 0,
    j = s.length - 1;

  while (i < j) {
    if (vowels[s[i]]) countA++;
    if (vowels[s[j]]) countB++;

    i++;
    j--;
  }

  return countA === countB ? true : false;
};
