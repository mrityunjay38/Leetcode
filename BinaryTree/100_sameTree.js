/**
 * Problem: 100 https://leetcode.com/problems/same-tree/
 */

/**
 * Solution: T=O(N)
 * 1. Compare left of T1 with left of T2 and like wise for right
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/**
 * Shorter Solution
 */

var isSameTree = function (p, q) {
  if (p == null || q == null) return p == q;
  return (
    p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  );
};
