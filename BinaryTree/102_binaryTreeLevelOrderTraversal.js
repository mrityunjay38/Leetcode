/**
 * Problem: 102 https://leetcode.com/problems/binary-tree-level-order-traversal/
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

/**
 * Solution 1: T=O(N), DFS ~ Pre-order but level order maintained as BFS style
 */

var levelOrder = function (root) {
  const levels = [];

  const dfs = (node, level) => {
    if (!node) {
      return;
    }

    if (levels[level]) {
      levels[level].push(node.val);
    } else {
      levels[level] = [node.val];
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 0);

  return levels;
};

/**
 * Solution 2: T=O(N), BFS using deque operations
 * 1. For loop to group level wise nodes together
 */

var levelOrder = function (root) {
  const result = [];
  if (!root) return result;

  const deque = [root];
  let level = 0;

  while (deque.length > 0) {
    result.push([]);
    const dqlen = deque.length;
    for (let l = 0; l < dqlen; l++) {
      const node = deque.shift();
      result[level].push(node.val);
      if (node.left) {
        deque.push(node.left);
      }

      if (node.right) {
        deque.push(node.right);
      }
    }
    level++;
  }

  return result;
};
