/**
 * Leetcode problem: https://leetcode.com/problems/all-paths-from-source-to-target/description/
 */

/**
 * Solution1: DFS, T=O(P*V) where P = number of paths, S=O(V) + recursion stack
 * Time complexity for this may reach exponential since may traverse same nodes multiple time in order to reach a target node
 * Keeping a visited array is meaningless, as it is of no use and if used will prevent you from reach target from another path which may overlap between already traversed and current path
 * 1 Simple DFS + backtrack, travserse all adjacence nodes from source till target is reached
 * 2. explore all path, if target reached, put into result and no need DFS further
 * 3. discard/pop current node from path while retracing back to previous node
 * @param {number[][]} graph
 * @return {number[][]}
 */

var allPathsSourceTarget = function (graph) {
  const allPaths = [];
  const source = 0,
    target = graph.length - 1;

  function dfs(node, currentPath) {
    currentPath.push(node);

    if (node === target) {
      allPaths.push([...currentPath]);
    } else {
      for (const nei of graph[node]) {
        dfs(nei, currentPath);
      }
    }

    currentPath.pop();
  }

  dfs(source, []);

  return allPaths;
};
