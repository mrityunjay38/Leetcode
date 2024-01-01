/**
 * Problem: 118 https://leetcode.com/problems/pascals-triangle/
 */

/**
 * Solution: Dynamic Programming based on an Array.
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
  let triangle = [];

  for (let i = 0; i < numRows; i++) {
    if (!i) {
      triangle.push([1]);
      continue;
    }

    let nextRow = [];
    let prevRow = triangle[i - 1] || [];
    for (let j = 0; j <= prevRow.length; j++) {
      if (j === 0) nextRow.push(prevRow[j]);
      else if (j === prevRow.length) nextRow.push(prevRow[j - 1]);
      else {
        nextRow.push(prevRow[j] + prevRow[j - 1]);
      }
    }
    triangle.push(nextRow);
  }

  return triangle;
};
