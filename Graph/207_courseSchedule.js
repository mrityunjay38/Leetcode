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
