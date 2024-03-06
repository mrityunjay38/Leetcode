/**
 * Problem: 114 https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

/**
 * Solution 1: DFS, T=O(N), S=O(N) ~ Recursion memory
 * 1. Traverse to the right most node of current sub-tree.
 * 2. Move backwards and link current node to prev node.
 * Example: Input
 *             1
 *            /  \
 *           2    5
 *          / \    \
 *         3   4    6
 *
 * Output: 6 <- 5 <- 4 <- 3 <- 2 <- 1 <- head
 */

var flatten = function (root) {
  let prev = null;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.right);
    dfs(node.left);
    node.right = prev;
    node.left = null;
    prev = node;
  };
  dfs(root);
};
