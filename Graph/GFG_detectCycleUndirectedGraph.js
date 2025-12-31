/**
 * GFG problem: https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1
 */

/**
 * Solution1: T=O(V+E), S=O(V+E)
 * Approach: DFS with Parent Tracking
 *
 * 1. Convert the given edge list into an undirected adjacency list.
 * 2. Maintain a visited array/map to track visited vertices.
 * 3. Perform DFS for each unvisited vertex (to handle disconnected graphs/components).
 * 4. During DFS:
 *    - Mark the current node as visited.
 *    - For each neighbor:
 *        a) If the neighbor is unvisited, recursively DFS with current node as parent.
 *        b) If the neighbor is visited and is NOT the parent, a cycle exists.
 * 5. If any DFS call detects a cycle, return true.
 * 6. If all components are processed and no cycle is found, return false.
 *
 * @param {number} V
 * @param {number[][]} edges
 * @returns {boolean}
 */

class Solution {
  isCycle(V, edges) {
    function generateAdjacencyList(V, edges) {
      const adj = Array.from({ length: V }, () => []);
      for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
      }
      return adj;
    }

    function checkCycle(node, prev, seen, adj) {
      seen.set(node, true);

      for (const neighbor of adj[node]) {
        if (!seen.has(neighbor)) {
          if (checkCycle(neighbor, node, seen, adj)) return true;
        } else if (neighbor !== prev) {
          return true;
        }
      }
      return false;
    }

    const adj = generateAdjacencyList(V, edges);
    const seen = new Map();

    for (let i = 0; i < V; i++) {
      if (!seen.has(i)) {
        if (checkCycle(i, -1, seen, adj)) return true;
      }
    }

    return false;
  }
}
