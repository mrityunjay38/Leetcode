/**
 * Problem: 94 https://leetcode.com/problems/binary-tree-inorder-traversal/
 */

/**
 * Solution: T=O(N)
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

var inorderTraversal = function (root) {
  const inorder = (node, order = []) => {
    if (!node) return order;

    inorder(node.left, order);
    order.push(node.val);
    inorder(node.right, order);

    return order;
  };

  return inorder(root);
};
