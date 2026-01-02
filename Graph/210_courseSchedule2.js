/**
 * Leetcode problem: https://leetcode.com/problems/course-schedule-ii
 */

/**
 * BFS Kahn's algo
 * T=O(V+E), S=O(V+E)
 * 1. Generate adj and indegree
 * 2. start with all the courses with 0 degree dependencies as a queue
 * 3. pop courses with zero as can be considered
 * 4. decrease indegree for adjacent courses
 * 5. if number of 0 degree courses is less than total number of courses, mean there was a cycle which prevented us from completing all the courses.
 * 6. else process queue was our topological order to complete all the courses as they were added in sequence with 0 degree dependencies
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  const indegree = new Array(numCourses).fill(0);

  for (const [v, u] of prerequisites) {
    adj[u].push(v);
    indegree[v]++;
  }

  const queue = [];
  let index = 0;

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (index < queue.length) {
    const currCourse = queue[index++];

    for (const nei of adj[currCourse]) {
      indegree[nei]--;
      if (indegree[nei] === 0) queue.push(nei);
    }
  }

  return index < numCourses ? [] : queue;
};
