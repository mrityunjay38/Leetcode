/**
 * Problem: 2387 https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/
 */

/**
 * Solution 1: T=O(N^2)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

var matrixMedian = function (grid) {
  let _1D = [];

  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[i].length; j++) _1D.push(grid[i][j]);

  _1D.sort((a, b) => a - b);

  return _1D[Math.floor(_1D.length / 2)];
};

/**
 * Solution 2: Unsolved using binary search application 
 */
