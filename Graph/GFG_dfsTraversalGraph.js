/**
 * GFG problem: https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1
 */

/**
 * Solution: Time Complexity
 * - O(V + E), where V=vertex or node, E=edge or path,
 * - Each vertex is visited once
 * - Each edge is explored once via adjacency list
 *
 * Space Complexity: O(V)
 * - Visited set
 *
 * Approach:
 * - Start DFS from node 0 (as required by the problem)
 * - Use a recursion to process neighbours of each node
 * - Mark nodes as visited before traversing down the path to avoid cycles
 * - Traverse neighbors using adjacency list
 *
 * @param {number[][]} adj
 * @returns {number[]}
 */

class Solution {
  dfs(adj) {
    function dfsTraversal(node, adj, visited = new Set(), path = []) {
      if (!visited.has(node)) visited.add(node);
      path.push(node);

      for (let x of adj[node]) {
        if (!visited.has(x)) {
          visited.add(x);
          dfsTraversal(x, adj, visited, path);
        }
      }

      return path;
    }

    return dfsTraversal(0, adj);
  }
}
