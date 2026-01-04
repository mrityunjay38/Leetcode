/**
 * GFG Problem: https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1
 */

/**
 * Solution1: BFS, T=O(V + E), S=O(V+E)
 * Undirected graph with unit weight for each edge
 * 1. prepare adjacency list for each node
 * 2. preapre distance array marked with Infinity as initial
 * 3. distance for source node will be 0, hence we start with dist[src] = 0 with src as first node inside the queue
 * 4. check if the distance to the neighbor through the current node is shorter than the previously known distance.
 * 5. if so, replace with minimum of current and previous measured distance
 * 6. push neighbour into the queue to repeat process of calculating shortest distance between it and its neighbours
 */

class Solution {
  shortestPath(V, edges, src) {
    const queue = [src];
    const dist = new Array(V).fill(Infinity);
    const adj = Array.from({ length: V }, () => []);

    // build adjacency list
    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    let index = 0;
    dist[src] = 0;
    while (index < queue.length) {
      const node = queue[index++];

      for (const nei of adj[node]) {
        if (dist[node] + 1 < dist[nei]) {
          dist[nei] = dist[node] + 1;
          queue.push(nei);
        }
      }
    }

    for (let i = 0; i < V; i++) {
      if (dist[i] === Infinity) dist[i] = -1;
    }

    return dist;
  }
}
