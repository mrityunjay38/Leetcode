/**
 * Problem: 113 https://leetcode.com/problems/path-sum-ii/description/
 */

/**
 * Solution1: T=O(N)
 * 1. Both pre-order and post-order calculations required to add, check and remove elements
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
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function (root, targetSum) {
  const result = [];
  const dfs = (node, sum = 0, path = []) => {
    if (!node) return false;

    sum += node.val;
    path.push(node.val);
    if (!node.left && !node.right) {
      if (sum == targetSum) {
        result.push([...path]);
      }
    }

    dfs(node.left, sum, path);
    dfs(node.right, sum, path);
    sum -= path.pop(); // useless to keep track of sum, since JS doesn't maintain reference, only path.pop is enough
  };

  dfs(root);
  return result;
};

/**
 * Solution2: DFS T=O(N)
 * Both preorder, postorder will work as long as checking for leaf nodes before consuming path as result
 */

var pathSum = function (root, targetSum) {
  const result = [];
  function dfs(root, sum = 0, path = []) {
    if (!root) return;

    sum += root.val;
    path.push(root.val);
    dfs(root.left, sum, path);
    dfs(root.right, sum, path);
    if (!root.left && !root.right && targetSum === sum) result.push([...path]);
    path.pop();
  }

  dfs(root);
  return result;
};
