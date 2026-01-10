/**
 * Leetcode problem: https://leetcode.com/problems/number-of-distinct-islands/
 * GFG problem: https://www.geeksforgeeks.org/problems/number-of-distinct-islands/1
 */

/**
 * Solution1: DFS, T=O(m*n log (m*n)), S=O(m*n) + recursion stack
 * 1. Find all the islands with their cells
 * 2. normalize them with topLeft cell (lowest row wise) then (lowest col wise)
 * 3. sort normalized cells (ideally this won't be required if following same traversal path for all island, if two islands are identically their cells will always come identical to normalized version of its identical.)
 * 4. if two islands are same, normalized cells will overlap
 * 5. hence we can store them as a string inside a set to remove duplicate
 * 6. number of islands in final set will be number of distinct islands
 * 7. questions mentioned to not check rotated or mirrored islands, else 8-transformations will requried to verify distinct islands
 * @param {number[][]} grid
 * @returns {number}
 */

class Solution {
  // Function to count the number of distinct islands.
  countDistinctIslands(grid) {
    const m = grid.length,
      n = grid[0].length;

    const visited = Array.from({ length: m }, (_, i) =>
      Array.from({ length: n }, (_, j) => 0)
    );

    // find island and count++

    function dfsMarkIsland(i, j, cells, topLeftCell) {
      if (
        i < 0 ||
        i >= m ||
        j < 0 ||
        j >= n ||
        visited[i][j] ||
        grid[i][j] !== 1
      )
        return;

      visited[i][j] = true;
      cells.push([i, j]);
      topLeftCell.minI = Math.min(topLeftCell.minI, i);
      topLeftCell.minJ = Math.min(topLeftCell.minJ, j);

      dfsMarkIsland(i - 1, j, cells, topLeftCell); //up
      dfsMarkIsland(i + 1, j, cells, topLeftCell); //down
      dfsMarkIsland(i, j - 1, cells, topLeftCell); //left
      dfsMarkIsland(i, j + 1, cells, topLeftCell); //right
    }

    // unique islands
    const uniqueIsland = new Set();

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1 && !visited[i][j]) {
          const cells = [];
          const topLeftCell = { minI: i, minJ: j };
          dfsMarkIsland(i, j, cells, topLeftCell);

          // normalize island coordinates
          const normalizedCells = cells.map(([x, y]) => [
            x - topLeftCell.minI,
            y - topLeftCell.minJ,
          ]);
          const sortedNormalizedCells = normalizedCells.sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
          });

          // put normalized into set for unique islands
          uniqueIsland.add(
            sortedNormalizedCells.map(([x, y]) => `${x},${y}`).join("|")
          );
        }
      }
    }

    return uniqueIsland.size;
  }
}
