/**
 * Problem: 144 https://leetcode.com/problems/binary-tree-preorder-traversal/
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

var preorderTraversal = function (root) {
  const preorder = (node, order = []) => {
    if (!node) return order;

    order.push(node.val);
    preorder(node.left, order);
    preorder(node.right, order);

    return order;
  };

  return preorder(root);
};
