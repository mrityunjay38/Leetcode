/**
 * Leetcode problem: https://leetcode.com/problems/insert-into-a-binary-search-tree
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
 * Solution1: T=O(log N)
 * 1. if root is null, simply create a root node with given value to be inserted
 * 2. move left of right based on value is less-than or greater-than current node value till you find leaf
 * 3. create new node and return
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  let r = root;
  while (root) {
    if (val > root.val) {
      if (root.right) root = root.right;
      else {
        const node = new TreeNode(val);
        root.right = node;
        return r;
      }
    } else if (val < root.val) {
      if (root.left) root = root.left;
      else {
        const node = new TreeNode(val);
        root.left = node;
        return r;
      }
    }
  }
  return r;
};
