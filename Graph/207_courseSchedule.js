/**
 * Leetcode problem: https://leetcode.com/problems/course-schedule/
 */

/**
 * Solution1: DFS, T=O(V+E), S=O(V)
 * If cycle detected, can't finish all the courses,
 * else true and we don't have to apply topological sort at all for this problem
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // adj List
  function generateAdjList() {
    const adj = Array.from({ length: numCourses }, () => []);
    for (const [v, u] of prerequisites) {
      adj[v].push(u);
    }

    return adj;
  }

  const visited = new Array(numCourses).fill(false);
  const visitedPath = new Array(numCourses).fill(false);
  const adjList = generateAdjList();

  function dfs(node) {
    visited[node] = true;
    visitedPath[node] = true;

    for (const nei of adjList[node]) {
      if (!visited[nei]) {
        if (dfs(nei)) return true;
      } else if (visitedPath[nei]) return true;
    }

    visitedPath[node] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      if (dfs(i)) return false;
    }
  }

  return true;
};

/**
 * Solution2: BFS Kahn's Algo, T=O(V+E), S=O(V)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // BFS - Kahn's algo for topological setups, one-depends-upon-another type problems
  // prepare adjacency list
  // calculate indegree instead of visited
  function generateAdjacencyListAndIndegree() {
    const adj = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);
    for (const [u, v] of prerequisites) {
      adj[v].push(u);
      indegree[u]++;
    }
    return [adj, indegree];
  }

  const [adjList, indegree] = generateAdjacencyListAndIndegree();

  // maintain queue with nodes having 0 degree dependency
  const queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let index = 0;

  // every pop becomes the topological sort
  while (index < queue.length) {
    const node = queue[index++];

    for (const nei of adjList[node]) {
      indegree[nei]--;
      if (indegree[nei] === 0) queue.push(nei);
    }
  }

  // if index post processing entire queue < numCourses = cycle detected, hence not possible to finish all courses
  return index < numCourses ? false : true;
};
