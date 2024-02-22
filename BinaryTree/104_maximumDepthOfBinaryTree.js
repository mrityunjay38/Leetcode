/**
 * Problem: 104 https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
 * Solution 1: T=O(N)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

/**
 * Solution 2: T=O(N)
 */

var maxDepth = function (root) {
  let maxDepth = 0;
  const dfs = (node, level) => {
    if (!node) return;

    maxDepth = Math.max(maxDepth, level + 1);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 0);

  return maxDepth;
};
