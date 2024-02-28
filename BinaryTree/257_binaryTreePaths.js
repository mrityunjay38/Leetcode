/**
 * Problem: 257 https://leetcode.com/problems/binary-tree-paths/
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
 * @return {string[]}
 */

/**
 * Solution: T=O(N)
 * 1. Backtrack method
 * 2. Pre-order to keep traversing till leaf found.
 * 3. Save current path and start backtrack to exclude paths till last left/right convergence
 *
 */

var binaryTreePaths = function (root) {
  const dfs = (node, current = [], result = []) => {
    if (!node) return false;

    current.push(node.val);

    if (!node.left && !node.right) {
      result.push([...current].join("->"));
    }

    dfs(node.left, current, result);
    dfs(node.right, current, result);

    current.pop();

    return result;
  };

  return dfs(root);
};
