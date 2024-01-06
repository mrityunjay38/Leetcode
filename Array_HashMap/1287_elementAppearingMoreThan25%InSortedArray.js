/**
 * Problem: 1287
 */

/**
 * Solution 1: Generate hashmap to check frequency greater than n/4;
 */

/**
 * Solution 2: T=O(n) Compare arr[i] and arr[n/4] to check if they are equal, hence the answer.
 * Example: n = 9, n/4 = 2, element with frequency equal or greater than n/4 must be between i, n/4
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const size = parseInt(arr.length / 4);
  for (let i = 0; i < arr.length - size; i++) {
    if (arr[i] === arr[i + size]) return arr[i];
  }
};
