/**
 * Problem: 199 https://leetcode.com/problems/binary-tree-right-side-view/
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
 * @return {number[]}
 */

/**
 * Solution: DFS - T=O(N)
 * 1. Inverse pre-order traversal (root-right-left)
 * 2. Update hashmap for first time level encounter
 */

var rightSideView = function (root) {
  const map = new Map();
  const dfs = (node, level) => {
    if (!node) return;

    if (!map.has(level)) map.set(level, node.val);
    if (node.right) dfs(node.right, level + 1);
    if (node.left) dfs(node.left, level + 1);
  };

  const result = [];
  if (!root) return result;
  dfs(root, 0);

  map.forEach((val, key) => {
    result.push(val);
  });

  return result;
};

/**
 * Problem: xxx Binary Tree Left Side View
 * GFG - https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1
 */

var leftSideView = function (root) {
  const map = new Map();
  const dfs = (node, level) => {
    if (!node) return;

    if (!map.has(level)) {
      map.set(level, node.data);
    }

    if (node.left) dfs(node.left, level + 1);
    if (node.right) dfs(node.right, level + 1);
  };

  const result = [];
  if (!root) return result;
  dfs(root, 0);

  map.forEach((val, key) => {
    result.push(val);
  });

  return result;
};
