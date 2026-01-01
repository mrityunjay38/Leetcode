/**
 * Leetcode Problem: https://leetcode.com/problems/number-of-provinces
 */

/**
/**
 * Solution: DFS (Connected Components)
 *
 * Time Complexity: O(N^2)  // adjacency matrix
 * Space Complexity: O(N)  // visited + recursion stack
 *
 * Approach:
 * 1. The input is an adjacency matrix representing an undirected graph.
 * 2. We iterate through each city.
 * 3. If a city is unvisited, it represents a new province: it means it is not connected to any previously explored city. Therefore, it represents the start of a new province.
 *    - Increment the province count
 *    - Perform DFS from this city to mark all directly and indirectly connected cities as visited
 * 4. DFS explores all neighbors of a city by scanning its adjacency row.
 *
 * The total number of DFS starts equals the number of provinces.
 * 
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const CONNECTED = 1;

  function dfs(node, adj, visited) {
    visited.add(node);

    for (let i = 0; i < adj[node].length; i++) {
      if (!visited.has(i) && adj[node][i] === CONNECTED) {
        dfs(i, adj, visited);
      }
    }
  }

  const visited = new Set();
  let count = 0;

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      count++;
      dfs(i, isConnected, visited);
    }
  }

  return count;
};
