/**
 * Problem: 2385 https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/
 *
 * Variations - Time to burn a binary tree, somehow affect individual node or a whole tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */

/**
 * Solution 1: DFS but not optimal, T=(O(N) + O(N)) ~ O(N), 2-pass DFS
 * 1. Same as #863
 * 2. Create graph by adding parent node to each node.
 * 3. Return max time to infect all adjacent nodes
 */

var amountOfTime = function (root, start) {
  let startNode = null;
  const addParent = (node, parent) => {
    if (!node) return;
    if (node.val == start) startNode = node;
    node.parent = parent;
    addParent(node.left, node);
    addParent(node.right, node);
  };
  addParent(root, null);

  const infected = new Map();
  let minTime = 0;
  const infect = (node, time = 0) => {
    if (!node || infected.has(node.val)) return;
    infected.set(node.val, true);
    infect(node.parent, time + 1);
    infect(node.left, time + 1);
    infect(node.right, time + 1);
    minTime = Math.max(minTime, time);
  };

  infect(startNode);
  return minTime;
};

/**
 * Solution2: BFS, T=O(N)
 * 1. Generate map of each node with its parent
 * 2. Also find startNode reference by matching the given integer value of start
 * 3. Start from startNode and move in left, right, upward (parent) direction and mark them visited to avoid cycle
 * 4. Start node is infected at minute 0. Since time is incremented at the start of each BFS level, initialize time = -1 so that the first level corresponds to minute 0.
 */
var amountOfTime = function (root, start) {
  let startNode = null;
  function addParent(root, map) {
    const queue = [root];
    map.set(root, null);
    while (queue.length) {
      const node = queue.pop();

      if (node.val === start) startNode = node;

      if (node.left) {
        map.set(node.left, node);
        queue.push(node.left);
      }

      if (node.right) {
        map.set(node.right, node);
        queue.push(node.right);
      }
    }
  }

  function infectionTime(start, parentMap, time = -1) {
    const visited = new Map();
    const queue = [start];
    visited.set(start, true);
    let index = 0;

    while (index < queue.length) {
      const size = queue.length - index;
      time++;

      for (let i = 0; i < size; i++) {
        const node = queue[index++];

        if (node.left && !visited.get(node.left)) {
          visited.set(node.left, true);
          queue.push(node.left);
        }

        if (node.right && !visited.get(node.right)) {
          visited.set(node.right, true);
          queue.push(node.right);
        }

        if (parentMap.get(node) && !visited.get(parentMap.get(node))) {
          visited.set(parentMap.get(node), true);
          queue.push(parentMap.get(node));
        }
      }
    }

    return time;
  }

  const parentMap = new Map();
  addParent(root, parentMap);
  return infectionTime(startNode, parentMap);
};

/**
 * Solution 3: T=O(N), single-pass DFS
 * 1. Non-intuitive single-pass T=O(N) solution exist as per Editorial
 * 2. Leaving it for later
 *
 * https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/editorial/
 */
