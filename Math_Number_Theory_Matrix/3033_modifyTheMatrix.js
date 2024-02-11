/**
 * Weekly Contest 384
 * Problem: 3033 https://leetcode.com/problems/modify-the-matrix/
 */

/**
 * Solution: T=O(N)
 * Column wise traversal
 * Calculate max before traversal
 * Scan optimization: Remember last cell with -1 and its value after replacement per column
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var modifiedMatrix = function (matrix) {
  for (let i = 0; i < matrix[0].length; i++) {
    let max = -1;
    for (let j = 0; j < matrix.length; j++) max = Math.max(max, matrix[j][i]);

    for (let j = 0; j < matrix.length; j++)
      if (matrix[j][i] == -1) matrix[j][i] = max;
  }

  return matrix;
};
