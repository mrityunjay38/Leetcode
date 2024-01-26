/**
 * Problem: 17 https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */

/**
 * Solution: T=O(N*4^n), N as length of digits and n being length of each string given as a string 
 */

/**
 * @param {string} digits
 * @return {string[]}
 */

const numpad = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

var letterCombinations = function (digits) {
  let options = [];

  if (!digits.length) return options;

  for (let i = 0; i < digits.length; i++) options.push(numpad[digits[i]]);
  return genCombo(0, options);
};

var genCombo = function (index, options, combo = "", ans = []) {
  if (index > options.length - 1) {
    ans.push(combo);
    return;
  }

  for (let i = 0; i < options[index].length; i++) {
    combo += options[index][i];
    genCombo(index + 1, options, combo, ans);
    combo = combo.slice(0, -1);
  }

  return ans;
};
