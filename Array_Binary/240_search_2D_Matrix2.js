/**
 * Problem: 240 https://leetcode.com/problems/search-a-2d-matrix-ii/
 */

/**
 * Solution: T=O(log n+m)
 * 1. In every iteration, at most we have a search space of rows + cols
 * 2. Elimination of left or right is feasible, hence binary search
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
  let r = 0,
    c = matrix[0].length - 1;

  while (r <= matrix.length - 1 && c >= 0) {
    const ele = matrix[r][c];
    if (target == ele) return true;

    if (target > ele) {
      r = r + 1;
    } else if (target < ele) {
      c = c - 1;
    }
  }

  return false;
};
