/**
 * Problem: 1901 https://leetcode.com/problems/find-a-peak-element-ii/
 */

/**
 * Solution: m = matrix row length, n = matrix column length
 * T=O(log n) * m
 * 1. In each iteration, linear search of size m is performed to find max element in a particular column.
 * 2. Elimination of left or right, hence log n
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */

var findPeakGrid = function (matrix) {
  const findMax = (c) => {
    let max = matrix[0][c],
      maxIndex = 0;
    for (let r = 0; r < matrix.length; r++)
      if (max < matrix[r][c]) {
        maxIndex = r;
        max = matrix[r][c];
      }
    return maxIndex;
  };

  let l = 0,
    r = matrix[0].length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const maxRowIndex = findMax(mid);
    const left = mid - 1 >= 0 ? matrix[maxRowIndex][mid - 1] : -1;
    const right =
      mid + 1 < matrix[0].length ? matrix[maxRowIndex][mid + 1] : -1;

    if (matrix[maxRowIndex][mid] > right && matrix[maxRowIndex][mid] > left) {
      return [maxRowIndex, mid];
    } else if (matrix[maxRowIndex][mid] < left) {
      r = mid - 1;
    } else l = mid + 1;
  }

  return [-1, -1];
};
