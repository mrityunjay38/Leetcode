/**
 * Leetcode Problem: https://leetcode.com/problems/rotting-oranges/description/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
 * Solution1: T=O(m x n), S=O(m x n), may hold all cells as rotten
 * Multi-source BFS
 * find fresh orange count
 * find rotten oranges cells
 * start simulating rotting from rotten cells at once
 * mark rotten cells to avoid processing them again
 * reduce fresh orange count everytime a orange is rotting away
 * We increment minutes after processing one BFS level, as long as there are rotten oranges to spread from AND fresh oranges still remain.
 * Each BFS level represents one minute of time.
 */

var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const queue = [];
  let fresh = 0;

  // Collect initial state
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) fresh++;
      if (grid[i][j] === 2) queue.push([i, j]);
    }
  }

  function rot(r, c) {
    if (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === 1) {
      grid[r][c] = 2;
      fresh--;
      queue.push([r, c]);
    }
  }

  if (fresh === 0) return 0;

  let minutes = 0;
  let idx = 0;

  while (idx < queue.length && fresh > 0) {
    let size = queue.length - idx;

    for (let i = 0; i < size; i++) {
      const [r, c] = queue[idx++];

      // up
      rot(r - 1, c);
      // down
      rot(r + 1, c);
      // left
      rot(r, c - 1);
      // right
      rot(r, c + 1);
    }

    minutes++;
  }

  return fresh === 0 ? minutes : -1;
};
