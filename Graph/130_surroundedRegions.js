/**
 *
 * Leetcode problem: https://leetcode.com/problems/surrounded-regions/description/
 * GFG Problem: https://www.geeksforgeeks.org/problems/replace-os-with-xs0052/1
 *
 */

/**
 * Solution1: BFS, T=O(m*n), S=O(m*n)
 * 1. BFS approach to first find all the O's on the boundaries and mark them visited since, they can't be surrounded by X
 * 2. Try to find connecting O's with those at the boundaries in vertical/horizontal directions and enqueue them, since they can't be surrounded by X as well.
 * 3. Remaining O's the grid can be surrounded with X, so we make them X as final processing.
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solve = function (board) {
  const m = board.length,
    n = board[0].length;
  const visited = new Set();
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue = [];

  // find O's on the boundary top/bottom/left/right

  for (let c = 0; c < n; c++) {
    // top
    if (board[0][c] === "O" && !visited.has(`${0},${c}`)) {
      visited.add(`${0},${c}`);
      queue.push([0, c]);
    }

    // bottom
    if (board[m - 1][c] === "O" && !visited.has(`${m - 1},${c}`)) {
      visited.add(`${m - 1},${c}`);
      queue.push([m - 1, c]);
    }
  }

  for (let r = 0; r < m; r++) {
    // left
    if (board[r][0] === "O" && !visited.has(`${r},${0}`)) {
      visited.add(`${r},${0}`);
      queue.push([r, 0]);
    }

    // right
    if (board[r][n - 1] === "O" && !visited.has(`${r},${n - 1}`)) {
      visited.add(`${r},${n - 1}`);
      queue.push([r, n - 1]);
    }
  }

  function enqueue(r, c) {
    if (
      r < 0 ||
      r >= m ||
      c < 0 ||
      c >= n ||
      board[r][c] !== "O" ||
      visited.has(`${r},${c}`)
    ) {
      return;
    }

    visited.add(`${r},${c}`);
    queue.push([r, c]);
  }

  let qIndex = 0;

  while (qIndex < queue.length) {
    const [r, c] = queue[qIndex++];
    if (!visited.has(`${r},${c}`)) {
      visited.add(`${r},${c}`);
      board[r][c] = "X";
    }

    for (const [dr, dc] of dir) {
      enqueue(r + dr, c + dc);
    }
  }

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === "O" && !visited.has(`${i},${j}`)) {
        board[i][j] = "X";
      }
    }
  }

  return board;
};

/**
 * Solution2: DFS, T=O(m*n), S=O(m*n)
 * 1. Same logic to first mark boundary O's and its connecting O's safe and visited, since they can't be surrounded with X
 * 2. We use DFS to traverse in vertical/horizontal directions, DFS explores all Os connected to a boundary O deeply before backtracking.
 * 3. Remaining O's the grid can be surrounded with X, so we make them X as final processing.
 * @param {character[][]} grid
 * @returns {void}
 */

class Solution {
  fill(grid) {
    const m = grid.length,
      n = grid[0].length;
    const visited = new Set();

    function markOsGroup(i, j) {
      if (
        i < 0 ||
        i >= m ||
        j < 0 ||
        j >= n ||
        grid[i][j] !== "O" ||
        visited.has(`${i},${j}`)
      )
        return;
      visited.add(`${i},${j}`);

      // up
      markOsGroup(i - 1, j);
      // down
      markOsGroup(i + 1, j);
      // left
      markOsGroup(i, j - 1);
      // right
      markOsGroup(i, j + 1);
    }

    // top and bottom row
    for (let j = 0; j < n; j++) {
      if (grid[0][j] === "O" && !visited.has(`${0},${j}`)) {
        markOsGroup(0, j);
      }
      if (grid[m - 1][j] === "O" && !visited.has(`${m - 1},${j}`)) {
        markOsGroup(m - 1, j);
      }
    }
    // left and right columns
    for (let i = 0; i < m; i++) {
      if (grid[i][0] === "O" && !visited.has(`${i},${0}`)) {
        markOsGroup(i, 0);
      }

      if (grid[i][n - 1] === "O" && !visited.has(`${i},${n - 1}`)) {
        markOsGroup(i, n - 1);
      }
    }

    for (let i = 1; i < m - 1; i++) {
      for (let j = 1; j < n - 1; j++) {
        if (grid[i][j] === "O" && !visited.has(`${i},${j}`)) {
          grid[i][j] = "X";
        }
      }
    }

    return grid;
  }
}
