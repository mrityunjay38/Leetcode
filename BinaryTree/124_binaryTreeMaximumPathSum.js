/**
 * Problem: 124 https://leetcode.com/problems/binary-tree-maximum-path-sum/
 */

/**
 * Solution: T=O(N)
 * 1. Take left sum and right sum, discard -ve sum.
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
 * @return {number}
 */

var maxPathSum = function (root) {
  let maxSum = -Infinity;
  const dfs = (node) => {
    if (!node) return 0;

    let lS = Math.max(0, dfs(node.left));
    let rS = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, lS + rS + node.val);
    return node.val + Math.max(lS, rS);
  };

  dfs(root);
  return maxSum;
};
