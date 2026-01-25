/**
 * Leetcode: https://leetcode.com/problems/find-eventual-safe-states/description/
 * GFG: https://www.geeksforgeeks.org/problems/eventual-safe-states/1
 */

/**
 * Solution1: DFS, T=O(V+E) , S=O(V)
 *
 * 1. Traverse each node in order from 0 to n-1
 * 2. if current dfs returns true, means safe node
 * 3. if already visited, check if visited already marked as safe
 * 4. traverse neighbours and check if cycle detected, return false
 * 5. else current node is safe, can mark safe.
 *
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  // visited array
  // visited path to detect cycle, if yes, they're not safe
  // mark node safe

  const visited = new Array(graph.length).fill(0);

  function dfs(node) {
    if (visited[node] !== 0) {
      // either visited or safe
      return visited[node] === 2;
    }

    visited[node] = 1;

    for (const nei of graph[node]) {
      // not safe / cycle detected
      if (!dfs(nei)) return false;
    }

    // safe
    visited[node] = 2;
    return true;
  }

  const safe = [];
  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) safe.push(i);
  }

  return safe;
};

/**
 * Solution2: BFS, T=O(V log V), S=O(V)
 * 1. Apply Kahn's algo but we need to find outdegree to mark node safe if they end on terminal node with outdegree as 0
 * 2. If current node is terminal node, we move in reverse to each to a safe node
 * 3. Reverse graph [u, v] to [v, u]
 * 4. Calculate indegree which will give outdegree of original graph
 * 5. All the nodes inside the queue will be our safe nodes which end on terminal nodes in original graph
 * 6. return sorted nodes
 *
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const rAdjList = Array.from({ length: graph.length }, () => []);
  const indegree = new Array(graph.length).fill(0);
  for (let u = 0; u < graph.length; u++) {
    for (let v of graph[u]) {
      rAdjList[v].push(u);
      indegree[u]++;
    }
  }

  const queue = [];
  let index = 0;

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (index < queue.length) {
    const node = queue[index++];

    for (const nei of rAdjList[node]) {
      indegree[nei]--;
      if (indegree[nei] === 0) queue.push(nei);
    }
  }

  return queue.sort((a, b) => a - b);
};

/**
 * Solution3: BFS, T=O(V+E), S=O(V)
 *
 * Same logic as of solution2 but we don't have to apply sort which makes it worst T=O(V logV)
 * by maintaining a safe node array
 *
 * 1. Apply Kahn's algo but we need to find outdegree to mark node safe if they end on terminal node with outdegree as 0
 * 2. If current node is terminal node, we move in reverse to each to a safe node
 * 3. Reverse graph [u, v] to [v, u]
 * 4. Calculate indegree which will give outdegree of original graph
 * 5. All the nodes inside the queue will be our safe nodes which end on terminal nodes in original graph
 * 6. return sorted nodes
 *
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const safe = new Array(graph.length).fill(false);
  const rAdjList = Array.from({ length: graph.length }, () => []);
  const indegree = new Array(graph.length).fill(0);
  for (let u = 0; u < graph.length; u++) {
    for (let v of graph[u]) {
      rAdjList[v].push(u);
      indegree[u]++;
    }
  }

  const queue = [];
  let index = 0;

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (index < queue.length) {
    const node = queue[index++];
    // since node in the queue are always with indegree 0 for reversed graph or outdegree of original graph
    safe[node] = true;

    for (const nei of rAdjList[node]) {
      indegree[nei]--;
      if (indegree[nei] === 0) queue.push(nei);
    }
  }

  const result = [];
  for (let i = 0; i < graph.length; i++) {
    if (safe[i]) result.push(i);
  }

  return result;
};
