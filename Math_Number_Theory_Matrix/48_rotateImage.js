/**
 * Problem: 48 https://leetcode.com/problems/rotate-image/
 */

/**
 * Solution: Transpose and reverse each row of 2D matrix.
 * [
 *  [1,2,3],        [1,4,7],        [7,4,1],
 *  [4,5,6],   ==>  [2,5,8],   ==>  [8,5,2],
 *  [7,8,9],        [3,6,9],        [9,6,3],
 * ]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let m = 0,
      n = matrix[i].length - 1;
    while (m < n) {
      [matrix[i][m], matrix[i][n]] = [matrix[i][n], matrix[i][m]];
      m++;
      n--;
    }
  }

  return matrix;
};
