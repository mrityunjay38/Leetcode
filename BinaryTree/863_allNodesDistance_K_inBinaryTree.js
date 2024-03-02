/**
 * Problem: 863 https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

/**
 * Solution: T=(O(N) + O(N)) ~ O(N)
 * 1. Create graph by adding parent node to each node.
 * 2. Store each node as result for every (k - x = 0) distance as an answer.
 */

var distanceK = function (root, target, k) {
  const addParent = (node, parent) => {
    if (!node) return;
    node.parent = parent;
    addParent(node.left, node);
    addParent(node.right, node);
  };
  addParent(root, null);

  const visited = new Map(),
    result = [];
  const dfs = (node, distance) => {
    if (!node || visited.has(node.val)) return;
    visited.set(node.val, true);
    if (distance == 0) {
      result.push(node.val);
      return;
    }

    dfs(node.parent, distance - 1);
    dfs(node.left, distance - 1);
    dfs(node.right, distance - 1);
  };

  dfs(target, k);
  return result;
};
