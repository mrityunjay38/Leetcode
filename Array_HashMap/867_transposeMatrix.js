/**
 * Problem: 867 https://leetcode.com/problems/transpose-matrix/
 */

/**
 * Solution 1: O(n*m) using reverse indexes
 */

var transpose = function (matrix, t = []) {
  for (let i = 0; i < matrix[0].length; i++) {
    const row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    t.push(row);
  }

  return t;
};

/**
 * Solution 2: O(n*m)
 */

var transpose = function (matrix, t = []) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!t[j]) t[j] = [];
      t[j][i] = matrix[i][j];
    }
  }

  return t;
};
