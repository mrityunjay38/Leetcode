/**
 * Problem: 12 https://leetcode.com/problems/integer-to-roman/
 */

/**
 * Solution: T=O(1) as size of roman set is fixed 13 items.
 * 1. If current number is greater than roman[character], add to string and subtract its value form original number
 * 2. Else goto next roman[character] in the map
 */

/**
 * @param {number} num
 * @return {string}
 */

const map = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

var intToRoman = function (num) {
  let roman = "";

  for (let numeral in map) {
    while (num >= map[numeral]) {
      roman += numeral;
      num -= map[numeral];
    }
  }

  return roman;
};
