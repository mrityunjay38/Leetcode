/**
 * Problem: 784 https://leetcode.com/problems/letter-case-permutation/
 */

/**
 * Solution: T=O(N*2^N)
 * 1. Hashmap to check for duplicates
 * 2. Usual backtracking to include or exclude, here to make a particular indexed character lowerCase() or upperCase()
 */

/**
 * @param {string} s
 * @return {string[]}
 */

var letterCasePermutation = function (s) {
  return genPermutations(0, s.split(""));
};

var genPermutations = function (
  index,
  s,
  modString = s,
  hmap = new Map(),
  ans = []
) {
  while (index < s.length && typeof parseInt(s[index]) !== "number") {
    index++;
  }

  if (index > s.length - 1) {
    const str = modString.join("");
    if (!hmap.has(str)) ans.push(str);
    hmap.set(str, true);
    return ans;
  }

  modString[index] = modString[index].toLowerCase();
  genPermutations(index + 1, s, modString, hmap, ans);
  modString[index] = modString[index].toUpperCase();
  genPermutations(index + 1, s, modString, hmap, ans);

  return ans;
};
