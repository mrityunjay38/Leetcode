/**
 * Problem: 74 https://leetcode.com/problems/search-a-2d-matrix/
 */

/**
 * Solution: T=O(log m*n)
 * Since, Linear array is converted into 2D where, 1st integer of each row is greater than the last integer of previous row
 * Hence, 2D array can be represented on a scale of [0, (m * n) - 1]
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length;

  let l = 0,
    r = m * n - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const ele = matrix[Math.floor(mid / n)][mid % n];

    if (target < ele) {
      r = mid - 1;
    } else if (target > ele) {
      l = mid + 1;
    } else {
      return true;
    }
  }

  return false;
};
