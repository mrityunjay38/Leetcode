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
 * Solution 1: T=(O(N) + O(N)) ~ O(N), 2-pass DFS
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
 * Solution 2: T=O(N), single-pass DFS
 * 1. Non-intuitive single-pass T=O(N) solution exist as per Editorial
 * 2. Leaving it for later
 *
 * https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/editorial/
 */
