/**
 * Leetcode problem: https://leetcode.com/problems/validate-binary-search-tree/description/
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
 *
 * Solution1: DFS T=O(N)
 * A BST requires all values in the left subtree to be strictly less than the current node
 * All values in the right subtree must be strictly greater
 * Each node must satisfy constraints imposed by all its ancestors
 * We propagate (min = -Infinity, max = Infinity) bounds while traversing
 * If at any point node.val <= min or node.val >= max, the tree is invalid
 *
 * Given constraint -(2^31) <= node.val <= (2^31) - 1
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, min = -(2 ** 31 + 1), max = 2 ** 31) {
  if (!root) return true;

  if (root.val <= min || root.val >= max) return false;

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
