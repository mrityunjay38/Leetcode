/**
 * Leetcode problem: https://leetcode.com/problems/number-of-islands
 */

/**
/**
 * Solution1: DFS (Connected Components in Grid) - Similar to undirected graph
 *
 * Time Complexity: O(m × n)
 * Space Complexity: O(m × n)  // visited + recursion stack
 *
 * Approach:
 * 1. The grid can be modeled as an undirected graph where each land cell ('1')
 *    is a node connected to its vertical and horizontal neighbors.
 * 2. We iterate through every cell in the grid.
 * 3. If a cell contains land and is unvisited, it represents a new island.
 * 4. We increment the island count and perform DFS to mark all connected land
 *    cells as visited.
 * 5. DFS explores only up, down, left, and right directions while ensuring
 *    boundary, land, and visited checks.
 * 6. Each DFS traversal marks exactly one island.
 * 
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const LAND = "1";
  const visited = new Set();
  const m = grid.length;
  const n = grid[0].length;

  function dfs(x, y) {
    if (
      x < 0 ||
      x >= m ||
      y < 0 ||
      y >= n ||
      grid[x][y] !== LAND ||
      visited.has(`${x},${y}`)
    ) {
      return;
    }

    visited.add(`${x},${y}`);

    dfs(x + 1, y); // down
    dfs(x - 1, y); // up
    dfs(x, y + 1); // right
    dfs(x, y - 1); // left
  }

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === LAND && !visited.has(`${i},${j}`)) {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};
