/**
 * Problem: 102 https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

/**
 * Solution: T=O(N), DFS ~ Pre-order but level order maintained as BFS style
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

var levelOrder = function (root) {
  const levels = [];

  const bfs = (node, level) => {
    if (!node) {
      return;
    }

    if (levels[level]) {
      levels[level].push(node.val);
    } else {
      levels[level] = [node.val];
    }

    bfs(node.left, level + 1);
    bfs(node.right, level + 1);
  };

  bfs(root, 0);

  return levels;
};
