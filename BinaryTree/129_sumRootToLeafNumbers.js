/**
 * Problem: 129 https://leetcode.com/problems/sum-root-to-leaf-numbers/
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

/**
 * Solution: T=O(N)
 * 1. Once root-to-leaf found, convert into number and add up.
 * 2. Backtrack to form next root-to-leaf number.
 */

var sumNumbers = function (root) {
  const dfs = (node, current = [], sum = [0]) => {
    if (!node) return;
    current.push(node.val);

    if (!node.left && !node.right) {
      sum[0] += parseInt(current.join(""));
    }

    dfs(node.left, current, sum);
    dfs(node.right, current, sum);
    current.pop();

    return sum[0];
  };

  return dfs(root);
};
