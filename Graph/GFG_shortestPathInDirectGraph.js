/**
 * GFG problem: https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1
 * URL may differ in future
 */

/**
 * Solution1: DFS, T=O(V+E), S=O(V)
 * 1. Must have to solve: DAG, adjacency list, visited array, distance per node from source
 * 2. While source could be any dist[i] = 0, where i = 0-to-n-1
 * 3. Apply topological sort using DFS + stack
 * 4. Process topological sorted array to check if current weight to reach adjacent node y form x is less than already computer weight
 * 5. if less, update with lesser, else continue with next node in topological sorted array
 */

class Solution {
  shortestPath(V, E, edges) {
    // Adjacency list for a directed weighted graph (DAG)
    const adj = Array.from({ length: V }, () => []);

    // Build the graph
    for (const [u, v, w] of edges) {
      adj[u].push([v, w]);
    }

    // Visited array for DFS-based topological sort
    const visited = new Array(V).fill(false);

    // Stack to store nodes in topological order
    const stack = [];

    // DFS to generate topological ordering
    function dfs(node) {
      visited[node] = true;

      for (const [v] of adj[node]) {
        if (!visited[v]) {
          dfs(v);
        }
      }

      // Push after processing all outgoing edges (postorder)
      stack.push(node);
    }

    // Run DFS from all nodes to cover disconnected components
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        dfs(i);
      }
    }

    // Distance array initialized to Infinity
    const dist = new Array(V).fill(Infinity);
    dist[0] = 0; // Source node is 0

    // Relax edges in topological order
    while (stack.length) {
      const node = stack.pop();

      for (const [v, w] of adj[node]) {
        if (dist[node] + w < dist[v]) {
          dist[v] = dist[node] + w;
        }
      }
    }

    // Convert unreachable nodes to -1 as per GFG requirement
    for (let i = 0; i < V; i++) {
      if (dist[i] === Infinity) {
        dist[i] = -1;
      }
    }

    return dist;
  }
}
