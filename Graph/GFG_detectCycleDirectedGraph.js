/**
 * GFG problem: https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1
 */

/**
 * Solution1: T=O(V+E), S=O(V+E)
 * Approach: DFS with Recursion Stack (Path Visited)
 *
 * 1. Convert the given edge list into an directed adjacency list.
 * 2. Maintain a visited array/map to track visited vertices and also maintain current path visited array/map too.
 * 3. Perform DFS for each unvisited vertex.
 * 4. During DFS:
 *    - Mark the current node as visited.
 *    - Mark it as visited_path for current recursion
 *    - For each neighbor:
 *        a) If the neighbor is unvisited, recursively DFS.
 *        b) If the neighbor is already visited AND is present in the current recursion stack (visitedPath), a cycle exists.
 * 5. If any DFS call detects a cycle, return true.
 * 6. If all vertices are processed and no cycle is found, return false.
 *
 * @param {number} V
 * @param {number[][]} edges
 * @returns {boolean}
 */

class Solution {
  isCyclic(V, edges) {
    const visited = new Set();
    const visitedPath = new Set();

    // adjacency list from given edges
    const adj = Array.from({ length: V }, () => []);
    for (const [u, v] of edges) {
      adj[u].push(v);
    }

    function dfs(node) {
      visited.add(node);
      visitedPath.add(node);

      for (const neighbour of adj[node]) {
        if (!visited.has(neighbour)) {
          if (dfs(neighbour)) return true;
        } else if (visitedPath.has(neighbour)) {
          return true;
        }
      }

      visitedPath.delete(node);
      return false;
    }

    for (let i = 0; i < V; i++) {
      if (!visited.has(i)) {
        if (dfs(i)) return true;
      }
    }

    return false;
  }
}
