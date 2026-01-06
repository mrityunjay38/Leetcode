/**
 * Leetcode problem: https://leetcode.com/problems/number-of-enclaves/description/
 * GFG Problem: https://www.geeksforgeeks.org/problems/number-of-enclaves/1
 */

/**
 * Can be solved with both DFS/BFS, Prefer BFS as much possible if problem can be solved using BFS
 *
 * Solution1: DFS
 *
 * T=O(m*n), S=O(m*n) recursion stack
 *
 * 1. Simple intution is to count all the 1's in the given grid
 * 2. count all the 1's connected to boundary
 * 3. 1's surrounded by 0's will be total1s - connected1s
 * 4. start DFS or BFS from boundary cells with 1's
 * 5. if allowed to modify given grid, no need of maintaining any visited grid/set
 * 6. modify 1's to -1 or anything while traversing 1's connected to boundary and their adjacent cells
 *
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  // total 1's - 1's which are connected to boundary rows/cols
  const m = grid.length,
    n = grid[0].length;
  let total1s = 0,
    connected1s = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) total1s++;
    }
  }

  function dfs(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] !== 1) return;
    grid[r][c] = -1;
    connected1s++;

    //top
    dfs(r - 1, c);
    //bottom
    dfs(r + 1, c);
    //left
    dfs(r, c - 1);
    //right
    dfs(r, c + 1);
  }

  // 1's on boundaries

  //top/bottom

  for (let j = 0; j < n; j++) {
    //top
    if (grid[0][j] === 1) {
      dfs(0, j);
    }

    //bottom
    if (grid[m - 1][j] === 1) {
      dfs(m - 1, j);
    }
  }

  //left/right
  for (let i = 0; i < m; i++) {
    //left
    if (grid[i][0] === 1) {
      dfs(i, 0);
    }

    //right
    if (grid[i][n - 1] === 1) {
      dfs(i, n - 1);
    }
  }

  return total1s - connected1s;
};

/**
 * Solution2: BFS
 */
