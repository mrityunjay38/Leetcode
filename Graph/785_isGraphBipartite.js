/**
 * Leetcode problem: https://leetcode.com/problems/is-graph-bipartite/
 */

/**
 * Solution1: BFS, T=O(V+E), S=O(V)
 * Explore all paths on the same level as current node
 * 1. A bipartite graph should be able to grouped into 2 parts uniformly
 * 2. If two adjacenct nodes are having same group, it's not bipartite
 * 3. since given graph can be disconnected components, we loop through all the vertices
 * 4. mark them visited with their grouping
 * 5. everytime you encounter two adjacent nodes with same group, return false to represent not a bipartite graph
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const visited = new Array(graph.length).fill(null);

  function flipGroup(group) {
    return group === "A" ? "B" : "A";
  }

  for (let start = 0; start < graph.length; start++) {
    if (visited[start] !== null) continue;

    const queue = [[start, "A"]];
    visited[start] = "A";
    let index = 0;

    while (index < queue.length) {
      const [node, group] = queue[index++];

      for (let i = 0; i < graph[node].length; i++) {
        const neighbour = graph[node][i];

        if (visited[neighbour] === null) {
          visited[neighbour] = flipGroup(group);
          queue.push([neighbour, visited[neighbour]]);
        } else if (visited[neighbour] === group) {
          return false;
        }
      }
    }
  }

  return true;
};

/**
 * Solution2: DFS, T=O(V+E), S=O(V) + recurssion stack
 * Explore deepest path first
 * 1. A bipartite graph should be able to grouped into 2 parts uniformly
 * 2. If two adjacenct nodes are having same group, it's not bipartite
 * 3. since given graph can be disconnected components, we loop through all the vertices
 * 4. mark them visited with their grouping
 * 5. everytime you encounter two adjacent nodes with same group, return false to represent not a bipartite graph
 * @param {number[][]} graph
 * @return {boolean}
 */

var isBipartite = function (graph) {
  const grouped = new Array(graph.length).fill(null);

  function dfs(node, group) {
    grouped[node] = group;

    for (const nei of graph[node]) {
      if (grouped[nei] === null) {
        if (!dfs(nei, 1 - group)) return false;
      } else if (grouped[nei] === group) return false;
    }

    return true;
  }

  for (let i = 0; i < graph.length; i++) {
    if (grouped[i] === null) if (!dfs(i, 0)) return false;
  }

  return true;
};
