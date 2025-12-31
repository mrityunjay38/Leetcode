/**
 * Leetcode problem: https://leetcode.com/problems/detonate-the-maximum-bombs/description/
 */

/**
 * Solution1:
 * Approach: Graph + DFS
 *
 * Graph Type: Directed Graph since a bomb may reach another bomb but not the opposite due to intensity radius difference
 *
 * Time Complexity: O(N³)
 * Space Complexity: O(N²)
 *
 * Steps:
 * 1. Treat each bomb as a node in a graph.
 * 2. Build a directed adjacency list:
 *    - For each pair of bombs (i, j),
 *      if bomb j lies within the blast radius of bomb i,
 *      add a directed edge i → j.
 * 3. For each bomb as a starting node:
 *    - Perform DFS to simulate the chain reaction.
 *    - Count how many bombs can be detonated.
 * 4. Track and return the maximum count across all starting bomb.
 *
 *
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
  const adj = Array.from({ length: bombs.length }, () => []);

  // prepare adjacencyList
  for (let i = 0; i < bombs.length; i++) {
    for (let j = 0; j < bombs.length; j++) {
      if (i === j) continue;
      const [x1, y1, r1] = bombs[i];
      const [x2, y2, r2] = bombs[j];

      const dx = x2 - x1;
      const dy = y2 - y1;

      if (dx ** 2 + dy ** 2 <= r1 ** 2) {
        adj[i].push(j);
      }
    }
  }

  // DFS to count all bombs reachable from a starting bomb
  function dfs(bomb, visited) {
    visited.add(bomb);
    let count = 1;

    for (let i = 0; i < adj[bomb].length; i++) {
      if (!visited.has(adj[bomb][i])) count += dfs(adj[bomb][i], visited);
    }

    return count;
  }

  let max = 0;

  // initiate from each given bomb coordinate and take max of bombs that can be detonated
  for (let i = 0; i < bombs.length; i++) {
    const visited = new Set();
    max = Math.max(max, dfs(i, visited));
  }

  return max;
};
