/**
 * Problem: 543 https://leetcode.com/problems/diameter-of-binary-tree/
 */

/**
 * Solution: T=O(N)
 * 1. DFS: Find max height / depth of left and right
 * 2. Take max of left + right, max.
 * 3. Post order traversal
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

var diameterOfBinaryTree = function (root) {
  let max = 0;
  const dfs = (node) => {
    if (!node) return 0;

    let lH = dfs(node.left);
    let rH = dfs(node.right);
    max = Math.max(max, lH + rH);

    return 1 + Math.max(lH, rH);
  };

  dfs(root);
  return max;
};
