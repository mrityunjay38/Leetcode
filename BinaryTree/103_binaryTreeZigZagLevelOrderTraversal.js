/**
 * Problem: 103 https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 */

/**
 * Solution: T=O(N) * O(K)
 * 1. Dequeue ideal for maintaining O(N)
 * 2. Array results into extra O(K) traversal to append element to front
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
 * @return {number[][]}
 */

var zigzagLevelOrder = function (root) {
  const levels = [];
  const dfs = (node, level) => {
    if (!node) return;
    if (levels[level]) {
      level % 2 == 0
        ? levels[level].push(node.val)
        : (levels[level] = [node.val, ...levels[level]]);
    } else {
      levels[level] = [node.val];
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 0);
  return levels;
};
