/**
 * Problem: 110 https://leetcode.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */

/**
 * Solution: 1 T=O(N), DFS ~ Depth variation
 */

var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return 0;

    let lH = dfs(node.left);
    if (lH == -1) return -1;
    let rH = dfs(node.right);
    if (rH == -1) return -1;

    if (Math.abs(lH - rH) > 1) return -1;

    return 1 + Math.max(lH, rH);
  };

  return dfs(root) == -1 ? false : true;
};
