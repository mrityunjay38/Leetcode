/**
 * GFG problem: https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1
 */

/**
 * Solution: Time Complexity
 * - O(V + E), where V=vertex or node, E=edge or path,
 * - Each vertex is visited once
 * - Each edge is explored once via adjacency list
 *
 * Space Complexity: O(V)
 * - Visited set + queue
 *
 * Approach:
 * - Start BFS from node 0 (as required by the problem)
 * - Use a queue to process nodes level by level
 * - Mark nodes as visited before enqueueing to avoid cycles
 * - Traverse neighbors using adjacency list
 * @param {number[][]} adj
 * @returns {number[]}
 */

class Solution {
  bfs(adj) {
    const visited = new Set();
    const queue = [];

    let index = 0;

    queue.push(0);
    visited.add(0);

    while (index < queue.length) {
      const node = queue[index++];

      for (let i = 0; i < adj[node].length; i++) {
        if (!visited.has(adj[node][i])) {
          queue.push(adj[node][i]);
          visited.add(adj[node][i]);
        }
      }
    }

    return queue;
  }
}
