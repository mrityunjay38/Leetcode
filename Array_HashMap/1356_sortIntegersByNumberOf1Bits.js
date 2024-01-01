/**
 * Problem: 1356 https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */

/**
 * Solution 1:
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  let sortedMap = {};
  for (let i = 0; i < arr.length; i++) {
    const byCount = _1bitsCount(arr[i]);
    if (sortedMap[byCount]) {
      sortedMap[byCount] = [...sortedMap[byCount], arr[i]].sort(
        (a, b) => a - b
      );
    } else {
      sortedMap[byCount] = [arr[i]];
    }
  }

  const entries = Object.values(sortedMap);
  let resultArr = [];

  for (let i = 0; i < entries.length; i++) {
    resultArr = [...resultArr, ...entries[i]];
  }

  return resultArr;
};

function _1bitsCount(dec) {
  let _1bits = 0;
  while (dec > 0) {
    remainder = dec % 2;
    if (remainder) _1bits++;
    dec = parseInt(dec / 2);
  }
  return _1bits;
}

/* -----------------x---------------------x---------------- */

/**
 * Solution 2:
 */
var sortByBits = function (arr) {
  arr.sort(comparator);
  return arr;
};

function _1bitsCount(dec) {
  let _1bits = 0;
  while (dec > 0) {
    remainder = dec % 2;
    if (remainder) _1bits++;
    dec = parseInt(dec / 2);
  }
  return _1bits;
}

function comparator(a, b) {
  const bitCountA = _1bitsCount(a);
  const bitCountB = _1bitsCount(b);
  if (bitCountA === bitCountB) return a - b;

  return bitCountA - bitCountB;
}
