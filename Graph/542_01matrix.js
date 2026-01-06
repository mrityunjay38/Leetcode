/**
 * Leetcode problem: https://leetcode.com/problems/01-matrix/description/
 * GFG Problem: https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1
 *
 */

/**
 * Solution1: Leetcode
 * BFS: T=O(m * n), S=O(m * n)
 * 1. This problem uses multi-source BFS, similar to Rotten Oranges, but instead of tracking time by levels, we propagate distances per cell.
 * 2. We treat all 0 cells as sources with distance 0 and perform multi-source BFS to compute the minimum distance to a zero for every cell.”
 * 3. Maintaine a distance matrix where positions of 0's are initialized as 0 distance and for rest it is INT_MAX or Infinity
 * 4. We take current position of the queued zero's and spread in vertical/horizontal directions
 * 5. if out of boundary of matrix, return
 * 6. in distance matrix if distance of row,col is > currentDistance+1 then we keep the smaller distance and push into the queue
 * @param {number[][]} grid
 * @return {number[][]}
 */
var updateMatrix = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // Distance matrix: 0 for cells with 0, Infinity for cells with 1
  const dist = Array.from({ length: m }, (_, i) =>
    Array.from({ length: n }, (_, j) => (grid[i][j] === 0 ? 0 : Infinity))
  );

  const queue = [];

  // Initialize BFS queue with all 0s
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) queue.push([i, j]);
    }
  }

  const distancer = (r, c, currDist) => {
    if (r < 0 || r >= m || c < 0 || c >= n) return;
    if (dist[r][c] > currDist + 1) {
      dist[r][c] = currDist + 1;
      queue.push([r, c]);
    }
  };

  // BFS using index pointer
  let idx = 0;
  while (idx < queue.length) {
    const [i, j] = queue[idx];
    const currDist = dist[i][j];

    distancer(i - 1, j, currDist);
    distancer(i + 1, j, currDist);
    distancer(i, j - 1, currDist);
    distancer(i, j + 1, currDist);

    idx++;
  }

  return dist;
};

/**
 * Solution2: GFG
 * BFS: T=O(m * n), S=O(m * n)
 * Same logic as Solution1 the only difference is source cells with 1 are used to calculate distance for each cell with 0
 * @param {number[][]} grid
 * @returns {number[][]}
 */
class Solution {
  nearest(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Distance matrix: Infinity for 0, 0 for 1
    const dist = Array.from({ length: m }, (_, i) =>
      Array.from({ length: n }, (_, j) => (grid[i][j] === 1 ? 0 : Infinity))
    );

    const queue = [];

    // Initialize BFS queue with all 1s
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) queue.push([i, j]);
      }
    }

    const distancer = (r, c, currDist) => {
      if (r < 0 || r >= m || c < 0 || c >= n) return;
      if (dist[r][c] > currDist + 1) {
        dist[r][c] = currDist + 1;
        queue.push([r, c]);
      }
    };

    // BFS using index pointer
    let idx = 0;
    while (idx < queue.length) {
      const [i, j] = queue[idx];
      const currDist = dist[i][j];

      distancer(i - 1, j, currDist);
      distancer(i + 1, j, currDist);
      distancer(i, j - 1, currDist);
      distancer(i, j + 1, currDist);

      idx++;
    }

    return dist;
  }
}
